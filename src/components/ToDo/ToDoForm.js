import React, { useState, useContext } from 'react'
import { AppContext } from '../../App';
import './ToDoForm.css';

export default function ToDoForm(props) {

  const { dataTest, setdataTest } = useContext(AppContext);

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
    setdataTest(data);
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
