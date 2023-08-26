import React from 'react';

const ProgressContext = React.createContext({
  list: [],
  progress: 0,
  progressChecker: () => {},
  onClickTaskHandler: () => {},
  totalComplete: 0,
  closeIsClicked: false,
  closeButtonHandler: () => {},
  onAddTask: () => {},
});

export default ProgressContext;
