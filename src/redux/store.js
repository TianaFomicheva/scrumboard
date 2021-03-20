import {createStore}  from 'redux'
// import tasks  from './reducers/tasks'
import {rootReducer}  from './reducers'



const persistedState = (localStorage.getItem('state') && localStorage.getItem('state')) 
                       ? JSON.parse(localStorage.getItem('state'))
                       : []                   
const store = createStore(rootReducer, persistedState)
// const store = createStore(tasks, persistedState)



store.subscribe(() => {
    // console.log(store.getState().tasks.items)
    const localState = store.getState().tasks.items ? store.getState().tasks.items : []
    localStorage.setItem('state', JSON.stringify({tasks:{items: localState}}))
})
// store.subscribe(() => {
//     console.log(store.getState().tasks.items)
//     const localState = store.getState() ? store.getState() : {}
//     localStorage.setItem('state', JSON.stringify( localState))
// })
// console.log(store.getState())
export default store