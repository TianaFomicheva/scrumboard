import {createStore}  from 'redux'
// import tasks  from './reducers/tasks'
import {rootReducer}  from './reducers'



const persistedState = localStorage.getItem('state') 
                       ? JSON.parse(localStorage.getItem('state'))
                       : {}                    
const store = createStore(rootReducer, persistedState)
// const store = createStore(tasks, persistedState)



store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store