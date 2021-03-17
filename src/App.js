import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
     <TodoList />
    </div>
    </DndProvider>
  )
}

export default App
