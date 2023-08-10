import logo from './logo.svg';
import React, { useState } from 'react';

// CSS Imports
import styles from './components/ToDo/ToDoContainer.module.css';
import './components/Date/Date.css';
import './App.css';

// Component Imports
import Button from './components/UI/Button/Button';
import ThemePicker from './components/ThemePicker/ThemePicker';
import Date from './components/Date/Date';
import ToDo from './components/ToDo/ToDo';

<script src="https://kit.fontawesome.com/8fa2bccd91.js" crossorigin="anonymous"></script>

function App() {
  

  return (
    <div className="App parent">
      
      <Date className='time grid--top' />

      <div className='grid--middle'>

        <div className='flex--middle'>
          <ToDo className='todo--flex'/>
        </div>

      </div>

      <div className='grid--bottom bottom--container'>
        <div>
          <center><Button>Add a task</Button></center>
          <ThemePicker/>
        </div>
      </div>

    </div>
  );
}

export default App;
