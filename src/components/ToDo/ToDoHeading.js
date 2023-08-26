import React, { useContext } from 'react'
import { ProgressContext } from './ToDo';
import { AppContext } from '../../App';
import ToDoForm from './ToDoForm';
import './ToDoHeading.css';

function ToDoHeading() {
  const { closeIsClicked, onAddTask } = useContext(ProgressContext);
  const { theme, selectedTheme } = useContext(AppContext);

  return (
    <div className='todo__grid--heading'>

      <h1
        className='todo__heading'
        style={{
          color: selectedTheme === 'peach' ? '#ffdfde' : theme.secondaryColor
        }}
      >  
        My ToDo
      </h1>

      <div className={closeIsClicked === true ? 'hide' : ''}>
        <ToDoForm
          addTask={onAddTask}
        />
      </div>

    </div>
  )
}

export default ToDoHeading;