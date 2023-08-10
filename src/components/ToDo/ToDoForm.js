import React, { useState } from 'react'
import './ToDoForm.css';

export default function ToDoForm(props) {

  const [taskState, setTaskState] = useState();

  const toDoHandler = (props) => {
    let data = props.target.value;
    setTaskState(data)
    // console.log(data);
  }

  const taskSubmitHandler = (event) => {
    event.preventDefault();
    let data = taskState;
    props.addTask(data);
    setTaskState('');
  }

  return (
    <form 
      onSubmit={taskSubmitHandler} 
      className="todo__heading--form__container">

      <input 
        onChange={toDoHandler}
        className="todo__heading--form__input"
        type='text' 
        placeholder="Enter a task..."
        value={taskState}
      />

      <button 
        className="todo__heading--form__button"
        submit='submit'
      >Add Task</button>
      
    </form>
  )
}
