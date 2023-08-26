import React, { useContext } from 'react';
import { ProgressContext } from './ToDo';
import './ToDoProgress.css';
import { AppContext } from '../../App';

export default function ToDoProgress(props) {
  const { list, progress, totalComplete } = useContext(ProgressContext);
  const { theme, selectedTheme } = useContext(AppContext);

  return (
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
            transition: 'background-size 0.1s ease-in-out',
            
          }}>
        </div>
      </div>
    </div>
  )
}
