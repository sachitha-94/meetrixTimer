import React, { useState, useEffect } from 'react';
import './App.css';
import TimerComponent from './TimerComponent';
import TotalTime from './TotalTime';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [T1Seconds, setT1Seconds] = useState(0);
  const [T2Seconds, setT2Seconds] = useState(0);
  const [T3Seconds, setT3Seconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [isT1Active, setIsT1Active] = useState(false);
  const [isT2Active, setIsT2Active] = useState(false);
  const [isT3Active, setIsT3Active] = useState(false);

  function toggleT1() {
    setIsT1Active(!isT1Active);
  }

  function toggleT2() {
    setIsT2Active(!isT2Active);
  }
  function toggleT3() {
    setIsT3Active(!isT3Active);
  }

  function resetT1() {
    setT1Seconds(0);
    setIsT1Active(false);
  }
  function resetT2() {
    setT2Seconds(0);
    setIsT2Active(false);
  }
  function resetT3() {
    setT3Seconds(0);
    setIsT3Active(false);
  }

  useEffect(() => {
    let interval = null;
    if (isT1Active) {
      interval = setInterval(() => {
        setT1Seconds(seconds => seconds + 100);
      }, 10000);
    } else if (!isT1Active && T1Seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isT1Active, T1Seconds]);

  useEffect(() => {
    let interval = null;
    if (isT2Active) {
      interval = setInterval(() => {
        setT2Seconds(seconds => seconds + 10);
      }, 1000);
    } else if (!isT2Active && T2Seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isT2Active, T2Seconds]);

  useEffect(() => {
    let interval = null;
    if (isT3Active) {
      interval = setInterval(() => {
        setT3Seconds(seconds => seconds + 1);
      }, 100);
    } else if (!isT3Active && T3Seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isT3Active, T3Seconds]);


  return (
    <div className="app">
      <TotalTime seconds={T1Seconds + T2Seconds + T3Seconds} />
      <TimerComponent seconds={T1Seconds} isActive={isT1Active} reset={resetT1} toggle={toggleT1} />
      <TimerComponent seconds={T2Seconds} isActive={isT2Active} reset={resetT2} toggle={toggleT2} />
      <TimerComponent seconds={T3Seconds} isActive={isT3Active} reset={resetT3} toggle={toggleT3} />
    </div>
  );
}

export default App;
