import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from './redux/store'
import './sass/app.sass'
import App from './App.js'
import { observe } from './components/Motion.js'
observe((taskPosition) =>{
  console.log(taskPosition)
ReactDOM.render(
  <Provider store={store} taskPosition={taskPosition}>
    <App />
  </Provider>,
  document.getElementById('root')
)}
)


