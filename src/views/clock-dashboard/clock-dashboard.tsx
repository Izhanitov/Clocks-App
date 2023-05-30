import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { TimeZoneProvider, ITimezoneProvider } from "../../services/providers/timezone-provider";
import Loader from "../../components/loader/loader";
import * as actions from '../../data/actions/actions';
import Clocks from "../../components/clocks/clocks";
import ErrorComponent from "../../components/error-component/error-component";

import './styles.scss';


const CLOCKS_NUMBER = 2;

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

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        provider.getTimeZone()
        .then(res => {                
            dispatch(loadTimezones(res));

            setIsLoaded(true);
        })
        .catch(() => setIsError(true));
    }, [dispatch, loadTimezones, provider])

    if(isError) {
        return <ErrorComponent />
    }
     
    if(!isLoaded) {
        return <Loader />
    }    

    return(
        <div className='dashboard-container'>
            {new Array(CLOCKS_NUMBER).fill(0).map((_, index) => <Clocks key={`hours-${index}`} date={date} />)}
        </div>
    )
}

export default ClockDashboard;
