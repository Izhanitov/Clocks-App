import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { TimeZoneProvider, ITimezoneProvider } from "../../services/providers/timezone-provider";
import Loader from "../../components/loader/loader";
import * as actions from '../../data/actions/actions';
import Clocks from "../../components/clocks/clocks";
import ErrorComponent from "../../components/error-component/error-component";

import './styles.scss';


const ClockDashboard = () => {
    const dispatch = useDispatch();

    const { loadTimezones } = actions;

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());

    const provider: ITimezoneProvider = useMemo(() => new TimeZoneProvider(), []);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        
        provider.getTimeZone()
        .then(res => {                
            dispatch(loadTimezones(res));

            setIsLoaded(true);
        })
        .catch(() => setIsError(true));

        return () => clearInterval(interval);
    }, [])

    if(isError) {
        return <ErrorComponent />
    }
     
    if(!isLoaded) {
        return <Loader />
    }    

    return(
        <div className='dashboard-container'>
            <Clocks key={`hours-1`} date={date} />
            <Clocks key={`hours-2`} date={date} />
        </div>
    )
}

export default ClockDashboard;
