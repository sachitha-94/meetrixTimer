import React from 'react';
import './App.css';

const TotalTime = ({ seconds }) => {

    console.log(seconds);
    let m = Math.floor(seconds / 600);
    let s = Math.floor((seconds % 600) / 10);
    let mili = Math.floor(((seconds % 600) % 10));
    return (
        <div>
            <div className="time">
                Total Time     {m}:{s}:{mili}
            </div>

        </div>
    );
}

export default TotalTime