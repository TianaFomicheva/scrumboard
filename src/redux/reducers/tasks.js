const initialState = {
    items: [],
    filtered:[]
   


}

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK": {
            console.log(state)
            const newId = (state.items && state.items.length>0) ? state.items[state.items.length - 1].id + 1 : 0
            const newTask = {
                id: newId,
                text: action.payload.text,
                categoryId: action.payload.categoryId
            }
console.log({...state, items: (state.items) ? [...state.items, newTask] : [newTask]})
            return {...state, items: (state.items) ? [...state.items, newTask] : [newTask]} 
         
        }
        case "EDIT_TASK": {

            return {items: state.items.map(item=> item.id === action.payload.id ? {...item, text: action.payload.text } : item)}
        }
        case "EDIT_TASK_CATEGORY": {
            
            return {items: state.items.map(item=> item.id === action.payload.id ? {...item, categoryId: action.payload.categoryId } : item)}
        }
        case "FILTER_TASKS": {
            console.log(action.payload.filter)
            return {...state, filtered: state.items.filter(it => it.text.indexOf(action.payload.filter) !== -1)}
        }
        case "REMOVE_TASK": {
            const oldItems = state.items
            const notDeleted = oldItems.filter(task => task.id !== action.payload.id)
            const newstate = {}
            newstate.items = notDeleted
            return {
                ...state,
                items: notDeleted
            }

        }
        // case "SET_TASKS": {
            
        //     return state
        // }

        default: {
            return state
        }
    }
}

