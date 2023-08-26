import styles from './ThemePicker.module.css';
import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

export const themes = {
  peach: [
    {
      background: '#F2574D',
      primaryColor: '#FF867E',
      secondaryColor: '#B53C34',
      buttonColor: 'white',
    }
  ],
  blueberry: [
    {
      background: '#38046A',
      primaryColor: '#6E37A4',
      secondaryColor: '#E2C5FF',
      buttonColor: 'white',
    }
  ],
  wine: [
    {
      background: '#750E33',
      primaryColor: '#C54271',
      secondaryColor: '#FF9CC0',
      buttonColor: 'white',
    }
  ],
};

export default function ThemePicker() {

  const { changeTheme, setTheme, setSelectedTheme } = useContext(AppContext);

  const colorChangeHandler = (data) => {
    const colorChoice = data.target.textContent.toLowerCase()

    console.log(colorChoice);

    for (const themeName of Object.keys(themes)) {
      if (themeName == colorChoice) {
        const selectedTheme = themes[themeName][0];
        
        setTheme({
          backgroundColor: selectedTheme.background,
          primaryColor: selectedTheme.primaryColor,
          secondaryColor: selectedTheme.secondaryColor,
          buttonColor: '#fff'
        });

        setSelectedTheme(colorChoice);

      }
    }
  }

  return (
    <div className={styles['theme-picker']}>
      <h1 className="theme-picker__heading">Theme Pickers</h1>
      <div className={styles['themepicker__container']}>

        <div onClick={colorChangeHandler}>Peach</div>

        <div onClick={colorChangeHandler}>Blueberry</div>

        <div onClick={colorChangeHandler}>Wine</div>

      </div>
    </div>
  )
}
