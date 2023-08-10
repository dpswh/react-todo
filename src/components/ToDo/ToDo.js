// Component Imports
import Card from "../UI/Card/Card";
import './ToDo.css';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import React, { useState, useEffect } from 'react'

export default function ToDo(props) {

  const [list, setList] = useState([]);
  const [totalComplete, setTotalComplete] = useState(0);

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

  return (
    <Card>
      <div className='todo'>

        <div className='todo__grid--heading'>

          <h1 className='todo__heading'>My ToDo</h1>

          <ToDoForm
            addTask={onAddTask}
          />

        </div>

        <div className='todo__grid--body'>
          {list.length === 0 ? emptyMessage : ''}
          <ToDoList
            removeTask={onClickTaskHandler}
            completeTask={progressChecker}
            task={list}
          />
        </div>

        <div className='todo__grid--buttons'>
          <i className="fa-solid fa-trash" style={{ color: 'white' }}></i>
          <button
            className="todo__buttons--close"
          >Close</button>
        </div>

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
