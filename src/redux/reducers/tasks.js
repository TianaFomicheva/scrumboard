const initialState = {
    items: [],
    

}

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK": {
            const serializedState = localStorage.getItem('state')
            const parsed = serializedState ? JSON.parse(serializedState) : null
            const newId = (parsed && parsed.items.length>0) ? parsed.items[parsed.items.length - 1].id + 1 : 0
            const newTask = {
                id: newId,
                text: action.payload.text,
                categoryId: action.payload.categoryId
            }
            const res = serializedState ?
                [...state.items,
                    newTask
                ] : [newTask]
            const newstate = {}
            newstate.items = res
            return newstate
        }
        case "EDIT_TASK": {
            state.items.map(task => { if (task.id == action.payload.id) { task.text = action.payload.text } })
            const res = [...state.items]
            const newstate = {}
            newstate.items = res
            return newstate
        }
        case "EDIT_CATEGORY": {
            state.items.map(task => { if (task.id == action.payload.id) { task.categoryId = action.payload.categoryID } })
            const res = [...state.items]
            const newstate = {}
            newstate.items = res
            return newstate
        }
        case "REMOVE_TASK": {
            const oldItems = state.items
            console.log(action.payload.id)
            const notDeleted = oldItems.filter(task => task.id !== action.payload.id )
            console.log(notDeleted)
            const newstate = {}
            newstate.items = notDeleted
            return {...state,
            items:notDeleted
                }
            // return {
            // items:notDeleted
            //     }

        }
        case "SET_TASKS": {
            return state
        }

        default: {
            return state
        }
    }
}

