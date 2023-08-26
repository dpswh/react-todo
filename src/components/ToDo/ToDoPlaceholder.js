import React, { useContext } from 'react';
import { ProgressContext } from './ToDo';
import { AppContext } from '../../App';
import './ToDoPlaceholder.css';


function ToDoPlaceholder() {
  const { closeIsClicked, closeButtonHandler } = useContext(ProgressContext);
  const { theme, selectedTheme } = useContext(AppContext);


  let buttonPlaceholderFalse =
    <div className='todo__grid--buttons'>

      <i className="fa-solid fa-trash" style={{ color: 'white' }}></i>

      <button
        className="todo__buttons--close"
        onClick={closeButtonHandler}
        style={{
          backgroundColor: theme.backgroundColor,
          color: selectedTheme === 'peach' ? '#FFDFDE' : theme.secondaryColor
        }}
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
    <div>
      {closeIsClicked === true ? buttonPlaceholderTrue : buttonPlaceholderFalse}
    </div>
  )
}

export default ToDoPlaceholder;