import {createStore}  from 'redux'
import tasks  from './reducers/tasks'



const persistedState = (localStorage.getItem('state') && localStorage.getItem('state')) 
                       ? JSON.parse(localStorage.getItem('state'))
                       : []                   
const store = createStore(tasks, persistedState)

store.subscribe(() => {
    const localState = store.getState().items ? store.getState().items : []
    localStorage.setItem('state', JSON.stringify({items: localState}))
})

export default store