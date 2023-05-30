import React, {useState, useMemo} from "react";
import { useStore } from "react-redux";

import AnalogClocks from "./analog-clocks/analog-clocks";
import { RootState } from "../../data/store/store";
import DropdownMenu from "../dropdown-menu/dropdown-menus";
import { MenuItem } from "../dropdown-menu/dropdown-menus";
import { TimezoneDto } from "../../data/models/timezone-models";
import DigitalClocks from "./digital-clocks/digital-clocks";

import './styles.scss';


interface ClocksProps {
    date: Date;   
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
        const menuItems: MenuItem[] = [];
        
        (timezones as TimezoneDto[]).forEach(item => {
            menuItems.push({
                name: item.name,
                key: item.timezone
            })
        })

        return menuItems;
    }, [timezones])

    return (
        <div className='clocks-container'>
            <AnalogClocks hours={date.getUTCHours() + selectedTimezone} minutes={date.getMinutes()} seconds={date.getSeconds()} />
            <DigitalClocks hours={date.getUTCHours() + selectedTimezone} minutes={date.getMinutes()} seconds={date.getSeconds()} />
            <DropdownMenu menuItems={menuItems} onMenuItemClick={onMenuItemClick} />
        </div>
    )
}

export default Clocks;
