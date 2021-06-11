import React from 'react';

export const Timer = ({ min, sec }) => {
    return (
        <div className="timer">
            <span>{min} : {sec}</span>
        </div>
    )
}