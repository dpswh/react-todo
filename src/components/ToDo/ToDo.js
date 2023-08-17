// Component Imports
import Card from "../UI/Card/Card";
import './ToDo.css';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import { useContext } from "react";
import { AppContext } from '../../App';

import React, { useState, useEffect } from 'react'

export default function ToDo(props) {

  const [list, setList] = useState([]);
  const [totalComplete, setTotalComplete] = useState(0);
  const [closeIsClicked, setCloseIsClicked] = useState(false);

  const { toDoTasks, setToDoTasks } = useContext(AppContext);

  console.log(list);
  const onAddTask = (data) => {
    // console.log(data);
    setList((prevTask) => {
      return [...prevTask, data];
    });
  }

  const onClickTaskHandler = (data) => {
    const deleteThis = data;
    const newList = list.filter(item => item !== deleteThis);
    // setToDoTasks(prevTask => prevTask - 1);
    console.log(toDoTasks.length);
    console.log(newList);
    setList((prevTask) => {
      return [...newList];
    })
  }

  const progressChecker = (data) => {
    setTotalComplete(data);
  }

  let progress = (totalComplete / list.length) * 100;
  let progressString = progress.toString();
  console.log(progressString);

  let emptyMessage =
    <center>
      <div className="todo--empty">
        <h2>Looking a bit empty here...</h2>
      </div>
    </center>

  const closeButtonHandler = (event) => {
    console.log(`CLOSE STATE -> ${closeIsClicked}`);
    closeIsClicked === false ? setCloseIsClicked(true) : setCloseIsClicked(false);
  }

  let buttonPlaceholderFalse =
    <div className='todo__grid--buttons'>

      <i className="fa-solid fa-trash" style={{ color: 'white' }}></i>

      <button
        className="todo__buttons--close"
        onClick={closeButtonHandler}
      >Close</button>

    </div>

  let buttonPlaceholderTrue =
  <div className="todo__flex--buttons--close--true">
    
      <button
        className="todo__buttons--close--true"
        onClick={closeButtonHandler}
      >Open</button>
    
  </div>


  return (
    <Card>
      <div className='todo'>

        <div className='todo__grid--heading'>

          <h1 className='todo__heading'>My ToDo</h1>

          <div className={closeIsClicked === true ? 'hide' : ''}>
            <ToDoForm
              addTask={onAddTask}
            />
          </div>

        </div>

        <div className={closeIsClicked === true ? 'hide' : ''}>
          <div className='todo__grid--body'>
            {list.length === 0 ? emptyMessage : ''}
            <ToDoList
              removeTask={onClickTaskHandler}
              completeTask={progressChecker}
              task={list}
            />
          </div>
        </div>

        {closeIsClicked === true ? buttonPlaceholderTrue : buttonPlaceholderFalse}


        <div className='todo__grid--progress'>
          <div className="todo__progress--container">
            <h3
              className="todo__progress--completed"
              style={{
                color: (progress === 0 || list.length === 0) ? '#888888' : (progress >= 50 ? 'white' : 'black'),
                transition: 'color 0.2s ease-in-out'
              }}>
              {totalComplete}/{list.length}
            </h3>

            <div
              className="todo__progress--bar"
              style={{
                backgroundSize: `${progress}%`,
                transition: 'background-size 0.1s ease-in-out'
              }}
            ></div>

          </div>
        </div>
      </div>
    </Card>
  )
}
