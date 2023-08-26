// Component Imports
import Card from "../UI/Card/Card";
import './ToDo.css';

import { createContext, useContext } from "react";
import { AppContext } from '../../App';

import React, { useState, useEffect } from 'react'
import ToDoProgress from "./ToDoProgress";
import ToDoPlaceholder from "./ToDoPlaceholder";
import ToDoHeading from "./ToDoHeading";
import ToDoBody from "./ToDoBody";

export const ProgressContext = createContext();

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

  const closeButtonHandler = (event) => {
    console.log(`CLOSE STATE -> ${closeIsClicked}`);
    closeIsClicked === false ? setCloseIsClicked(true) : setCloseIsClicked(false);
  }

  return (
    <ProgressContext.Provider 
    value={{
      list,
      progress,
      progressChecker,
      onClickTaskHandler,
      totalComplete,
      closeIsClicked,
      closeButtonHandler,
      onAddTask
    }}>
      <Card>
        <div className='todo'>

          <ToDoHeading/>

          <ToDoBody/>

          <ToDoPlaceholder />

          <ToDoProgress />

        </div>
      </Card>
    </ProgressContext.Provider>
  )
}
