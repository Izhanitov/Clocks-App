import React, {useState, useMemo} from "react";
import { useStore } from "react-redux";

import AnalogClocks from "./analog-clocks/analog-clocks";
import { RootState } from "../../data/store/store";
import DropdownMenu from "../dropdown-menu/dropdown-menus";
import { MenuItem } from "../dropdown-menu/dropdown-menus";
import { TimezoneDto } from "../../data/models/timezone-models";
import DigitalClocks from "./digital-clocks/digital-clocks";

import './styles.scss';


const HOURS_TO_MS = 3600000;

interface ClocksProps {
    date: number;   
}

const Clocks = (Props: ClocksProps) => {
    const {
        date
    } = Props

    const store = useStore();

    const timezones = (store.getState() as RootState).timezoneReducer.timezones;

    const [selectedTimezone, setSelectedTimezone] = useState<number>((timezones[0] as TimezoneDto).timezone);

    const onMenuItemClick = (key: number) => {
        setSelectedTimezone(key);
    }

    const menuItems = useMemo((): MenuItem[] => {        
        return timezones.map(timeZone => ({
            name: timeZone.name,
            key: timeZone.timezone
        }));
    }, [timezones])
        
    const dateWithTimezone = new Date(date + (HOURS_TO_MS * selectedTimezone))

    return (
        <div className='clocks-container'>
            <AnalogClocks 
                hours={dateWithTimezone.getHours()} 
                minutes={dateWithTimezone.getMinutes()} 
                seconds={dateWithTimezone.getSeconds()} 
            />
            <DigitalClocks 
                hours={dateWithTimezone.getHours()} 
                minutes={dateWithTimezone.getMinutes()} 
                seconds={dateWithTimezone.getSeconds()} />
            <DropdownMenu menuItems={menuItems} onMenuItemClick={onMenuItemClick} />
        </div>
    )
}

export default Clocks;
