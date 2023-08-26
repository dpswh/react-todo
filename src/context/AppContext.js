import React from 'react'

const AppContext = React.createContext({
  toDoTasks: [],
  setToDoTasks: () => {},

  dataTest: [],
  setDataTest: () => {},

  theme: {},
  setTheme: () => {},
  
  selectedTheme: '',
  setSelectedTheme: () => {}
})

export default AppContext;