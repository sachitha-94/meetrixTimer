import React from 'react';
import './App.css';

const TimerComponent = ({ seconds, isActive, reset, toggle }) => {

    console.log(seconds);
    let m = Math.floor(seconds / 600);
    let s = Math.floor((seconds % 600) / 10);
    let mili = Math.floor(((seconds % 600) % 10));
    return (
        <div>
            <div className="time">
                {m}:{s}:{mili}
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
        </button>
            </div>
        </div>
    );
}

export default TimerComponent