import React from "react";

import ClockStrokes from "./clock-strokes/clock-strokes";

import './styles.scss';


interface AnalogClocksProps {
    hours: number;
    minutes: number;
    seconds: number;
}

const AnalogClocks = (Props: AnalogClocksProps) => {
    const {
        hours,
        minutes,
        seconds,
    } = Props;

    const hoursDegrees = (360 / 12) * hours + (360 / 12 / 60) * minutes;
    const minutesDegrees = (360 / 60) * minutes;
    const secondsDegrees = (360 / 60) * seconds;

    return (
        <div className='clock-container'>
            <div className='hour-hand' style={({transform: `rotate(${hoursDegrees}deg)`})}></div>
            <div className='minute-hand' style={({transform: `rotate(${minutesDegrees}deg)`})}></div>
            <div className='second-hand' style={({transform: `rotate(${secondsDegrees}deg)`})}></div>
            <ClockStrokes />
        </div>
    )
}

export default AnalogClocks;
