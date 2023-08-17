import logo from './logo.svg';
import React, { useState, useEffect, createContext } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import axios from 'axios';

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


export const AppContext = createContext();

const quotes = [
  'Motivation is what gets you started. Habit is what keeps you going.',
  'We are what we repeatedly do. Excellence, therefore, is not an act but a habit.',
  'Dreams won\'t work unless you do',
  'I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.',
  'If you aim for nothing, you\'ll hit it every time.',
  'Let your actions be louder than your words and your dreams bigger than your fears.',
  'Always dare to dream. For as long as there’s a dream, there is hope, and as long as there is hope, there is joy in living.',
  'Man, fuck what other people think. Create the life you want my brother.',
]

const randomNum = Math.floor(Math.random() * 8);

function App() {
  const [dataTest, setdataTest] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setdataTest(JSON.stringify(response.data));
        console.log('Data fetched:', response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
    console.log(dataTest);
  }, []);

  const [numOfToDo, setNumOfToDo] = useState(0);
  const [toDoTasks, setToDoTasks] = useState([]);

  const transitions = useTransition(toDoTasks, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });


  const addToDoHandler = () => {
    if (numOfToDo === 3) {
      alert('Max of 3 dataTest only!');
    } else {
      setNumOfToDo(prevNum => prevNum + 1);
    }
  }

  useEffect(() => {
    const newToDoTasks = [];

    for (let i = 0; i < numOfToDo; i++) {
      newToDoTasks.push(`Task ${i + 1}`);
    }

    setToDoTasks(newToDoTasks);
  }, [numOfToDo]);

  let toDoPlaceholder =
    <center>
      <h1 className='todo__placeholder'>{quotes[randomNum]}</h1>
      {/* <h1 className='todo__placeholder'>{dataTest}</h1> */}
    </center>

  if (numOfToDo > 0) {
    toDoPlaceholder = transitions((style, task) => (
      <animated.div style={style}>
        <ToDo className='todo--flex' task={task} />
      </animated.div>
    ))
  }

  return (
    <div className="App parent">
      <AppContext.Provider value={{toDoTasks, setToDoTasks, dataTest, setdataTest}}>

        <Date className='time grid--top' />

        <div className='grid--middle'>
          <div className='flex--middle' style={{
            justifyContent: numOfToDo < 0 ? 'center' : 'space-evenly'
          }}>
            {toDoPlaceholder}
          </div>
        </div>

        <div className='grid--bottom'>
          <div className='bottom--container'>

            <center>
              <button
                className='todo__add--button'
                onClick={addToDoHandler}
              >
                Add a ToDo
              </button>
            </center>

            <ThemePicker />
          </div>
        </div>
        
      </AppContext.Provider>
    </div>
  );
}

export default App;

