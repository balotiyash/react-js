import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    const start = () => {
        setIsRunning(i => true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(i => false);
    }

    const reset = () => {
        setElapsedTime(e => 0);
        setIsRunning(i => false);
    }

    const formatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let secs = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, '0');
        mins = String(mins).padStart(2, '0');
        secs = String(secs).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        // return `${hours}:${mins}:${secs}:${milliseconds}`;
        return `${mins}:${secs}:${milliseconds}`;
    }

    return (
        <div>
            <h1>{formatTime()}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch