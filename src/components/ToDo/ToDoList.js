import React, { useState, useId, useEffect } from 'react'
import './ToDoList.css'

export default function ToDoList(props) {
  const [completedItems, setCompletedItems] = useState([]);
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

  // const taskClickHandler = (clickedItem) => {
  //   props.removeTask(clickedItem);
  //   // console.log(clickedItem);
  // }

  return (
    <ul className='todo__list'>
      {data.map((item, index) => (
        <li
          key={index}
          onClick={() => toggledCompleted(item)}
          className={completedItems.includes(item) ? 'todo--completed' : ''}
        >{item}</li>
      ))}
    </ul>
  )
}
