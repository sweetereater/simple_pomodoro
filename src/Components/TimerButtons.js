import React from 'react';

export default function TimerButtons({ isRunning, startTimer, stopTimer, resetTimer }) {
    return (
        <div className="timerButtons">
            {!isRunning && <button onClick={startTimer}>Start</button>}
            {isRunning && <button onClick={stopTimer}>Stop</button>}
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}