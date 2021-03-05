
import {createStore}  from 'redux'
import tasks  from './reducers/reducer'


const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(tasks, persistedState)
store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
})

export default store