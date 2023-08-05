import React, { useState, useEffect } from 'react';
import './Date.css';

export default function DigitalClock() {

  function formatDateToday() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }

  const [clockState, setClockState] = useState('');

  const today = formatDateToday();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 0);

    // return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='time'>
      <div>
        <strong>{clockState}</strong>
        <p className='today'>{today}</p>
      </div>
    </div>
  )
}
