import React, { useState, useId, useEffect } from 'react'
import { useContext } from "react";
import { AppContext } from '../../App';

import './ToDoList.css'

export default function ToDoList(props) {
  const [completedItems, setCompletedItems] = useState([]);
  const [toDos, setToDos] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  // let totalTask = 
  let totalCompleted = completedItems.length;

  const toggledCompleted = (clickedItem) => {

    if (completedItems.includes(clickedItem)) {
      setCompletedItems(completedItems.filter(i => i !== clickedItem));
    } else {
      setCompletedItems([...completedItems, clickedItem]);
    }

  };


  useEffect(() => {
    props.completeTask(totalCompleted);
    console.log(totalCompleted);
  }, [completedItems]);

  let data = props.task;

  const removeTaskHandler = (taskIndex) => {
    data.splice(taskIndex, 1);
    console.log(data);
    setNumOfToDo(prevNum => prevNum - 1);
    
  }


  const {numOfToDo, setNumOfToDo, theme, selectedTheme } = useContext(AppContext);

  console.log(data);

  return (
    <ul className='todo__list'>
      {data.map((item, index) => (
        <div key={index} className='todo__item'>
          <li
            style={{ color: selectedTheme === 'peach' ? '#FFDFDE' : theme.secondaryColor }}
            onClick={() => toggledCompleted(item)}
            className={completedItems.includes(item) ? 'todo--completed' : ''}
          >
            {item}
          </li>
          <i
            onClick={() => props.removeTask(item)}
            className="fa-solid fa-x"
            style={{ color: theme.secondaryColor }}>
          </i>
        </div>
      ))}
    </ul>
  )
}
