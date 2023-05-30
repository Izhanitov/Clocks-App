import React from "react";

import './styles.scss';


interface DigitalClocksProps {
    hours: number;
    minutes: number;
    seconds: number;
}

const DigitalClocks = (Props: DigitalClocksProps) => {
    const {
        hours,
        minutes,
        seconds,
    } = Props;

    const correctNums = (nums: number) => {
        return String(nums).padStart(2, '0');
    }

    return (
        <div className='digital-clocks'>
            {`${correctNums(hours)}:${correctNums(minutes)}:${correctNums(seconds)}`}
        </div>
    )
}

export default DigitalClocks;
