const initialState = {
    items: [],
    filtered:[]   

}

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK": {
            const newId = (state.items && state.items.length>0) ? state.items[state.items.length - 1].id + 1 : 0
            const newTask = {
                id: newId,
                text: action.payload.text,
                categoryId: action.payload.categoryId
            }

            return {...state, items: (state.items && state.items.length>0) ? [...state.items, newTask] : [newTask]} 
         
        }
        case "EDIT_TASK": {

            return { items: state.items.map(item=> item.id === action.payload.id ? {...item, text: action.payload.text } : item), filtered: state.filtered.map(item=> item.id === action.payload.id ? {...item, text: action.payload.text } : item)}
        }
        case "EDIT_TASK_CATEGORY": {
            
            return {items: state.items.map(item=> item.id === action.payload.id ? {...item, categoryId: action.payload.categoryId } : item)}
        }
        case "FILTER_TASKS": {
            return {...state, filtered: state.items.filter(it => it.text.indexOf(action.payload.filter) !== -1)}
        }
        case "CLEAR_FILTER_TASKS": {
            return {items: state.items}
        }
        case "REMOVE_TASK": {

            return {items: state.items.filter(item => item.id !== action.payload.id), filtered:  state.filtered.filter(item => item.id !== action.payload.id)}

        }
        default: {
            return state
        }
    }
}

