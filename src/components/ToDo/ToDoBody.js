import React, { useContext } from 'react'
import { ProgressContext } from './ToDo';
import { AppContext } from "../../App";
import ToDoList from './ToDoList';
import './ToDoBody.css';

function ToDoBody() {
  const { list, closeIsClicked, progressChecker, onClickTaskHandler } = useContext(ProgressContext);
  const { theme } = useContext(AppContext);

  let emptyMessage =
    <center>
      <div className="todo--empty">
        <h2 style={{
          color: theme.secondaryColor
        }}>Looking a bit empty here...</h2>
      </div>
    </center>

  return (
    <div className={closeIsClicked === true ? 'hide' : ''}>
      <div>
        {list.length === 0 ? emptyMessage : ''}
        <ToDoList
          removeTask={onClickTaskHandler}
          completeTask={progressChecker}
          task={list}
        />
      </div>
    </div>
  )
}

export default ToDoBody