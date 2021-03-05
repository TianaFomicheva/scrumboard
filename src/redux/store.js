
import {createStore}  from 'redux'
import reducer  from './reducers/reducer'


const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(reducer, persistedState)
store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
})

export default store