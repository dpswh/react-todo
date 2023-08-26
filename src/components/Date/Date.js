import React, { useState, useEffect, useContext } from 'react';
import './Date.css';
import { AppContext } from '../../App';

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

  const [clock12hr, setClockState] = useState('');
  const [clock24hr, setClock24hr] = useState('');
  const [timeIsClicked, setTimeIsClicked] = useState(false);
  const { theme, selectedTheme } = useContext(AppContext);

  const today = formatDateToday();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());

      // Extract the 24-hour format time
      const hours24 = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      setClock24hr(`${hours24}:${minutes}:${seconds}`);
    }, 1000); // Update every 1 second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const changeDateFormatHandler = () => {
    timeIsClicked === false ? setTimeIsClicked(true) : setTimeIsClicked(false);
  }

  return (
    <div className='time'>
      <div>
        <strong
          className='time__text'
          onClick={changeDateFormatHandler}
          style={{ color: selectedTheme === 'peach' ? '#FFDFDE' : theme.secondaryColor }}
        >
          {timeIsClicked === true ? clock12hr : clock24hr}
        </strong>
        <p
          className='today'
          style={{ color: selectedTheme === 'peach' ? '#FFDFDE' : theme.secondaryColor }}
        >{today}</p>
      </div>
    </div>
  )
}
