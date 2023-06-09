import React from "react";


const CLOCK_RADIUS = 200;
const STROKE_WIDTH = 5;

const ClockStrokes = () => {
    const getStorkeLeft = (index: number) => {
        return -CLOCK_RADIUS/2 * Math.cos(Math.PI / 2 + (Math.PI / 6 * index));
    }

    const getStorkeTop = (index: number) => {
        return -CLOCK_RADIUS/2 * Math.sin(Math.PI / 2 + (Math.PI / 6 * index));
    }

    return (
        <>
            {new Array(12).fill(0).map((_, index) => 
                <div className='clock-stroke'
                    key={'clock-stoke-' + index}
                    style={{
                        transform: `rotate(${(360 / 12) * index}deg)`,
                        left: `calc(50% - ${STROKE_WIDTH/2}px + ${getStorkeLeft(index)}px)`,
                        top: `calc(50% + ${getStorkeTop(index)}px)`
                    }}
                >
                </div>
            )}
        </>
    )
}

export default ClockStrokes;
