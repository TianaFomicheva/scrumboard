
import {createStore}  from 'redux'
import tasks  from './reducers/tasks'
// import thunk  from 'redux-thunk'
// import persistState from 'redux-localstorage'
// const composeEnhancers =  compose


const persistedState = localStorage.getItem('state') 
                       ? JSON.parse(localStorage.getItem('state'))
                       : {}


//  const enhancer = compose(
                        
//                         persistState(/*paths, config*/),
//                       )                       
const store = createStore(tasks, persistedState)
// const store = createStore(tasks, persistedState, composeEnhancers(applyMiddleware(thunk)))
store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
    store.getState()
})

export default store