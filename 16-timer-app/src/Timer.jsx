import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(t => new Date());
        }, 1000);

        return() => {
            clearInterval(intervalId);
        }
    }, []);

    const formatTime = () => {
        let hours = time.getHours();
        const mins = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(sec)} ${meridiem}`
    }

    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    return (
        <div>
            <h1>{formatTime()}</h1>
        </div>
    )
}

export default Timer