import React, { useState, useRef } from 'react';
import { Timer } from './Timer';
import TimerButtons from './TimerButtons';

const formatTime = (time) => {
    return time < 10 ? "0" + time : time
}

export default function App(props) {

    const [title, setTitle] = useState("Let the countdown begin!")
    const [time, setTime] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    const timeIntervalRef = useRef(null);

    function startTimer() {
        if (isRunning) return;
        setIsRunning(true);

        setTitle(`You are doing great`);
        timeIntervalRef.current = setInterval(() => {
            setTime(time => {
                if (time >= 1) return time - 1;

                resetTimer();
                return 0;
            })
        }, 1000)
    }

    function stopTimer() {
        if (!isRunning) return;
        setIsRunning(false);
        clearInterval(timeIntervalRef.current);
        setTitle('Dont give up!')
    }

    function resetTimer() {
        clearInterval(timeIntervalRef.current);
        setIsRunning(false);
        setTitle('Ready to another round?')
        setTime(10);
    }

    const minutes = formatTime(Math.floor(time / 60));
    const seconds = formatTime(time % 60);

    return (
        <>
            <div className="app">
                <h1 className='pomodoro'>POMODORO TIMER</h1>
                <h1>{title}</h1>
                <Timer min={minutes} sec={seconds} />
                <TimerButtons
                    isRunning={isRunning}
                    startTimer={startTimer}
                    stopTimer={stopTimer}
                    resetTimer={resetTimer}
                />
            </div>
        </>
    )
}