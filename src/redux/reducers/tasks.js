const initialState = {
    items: []

}

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK": {
            const serializedState = localStorage.getItem('state');
            const parsed = serializedState ? JSON.parse(serializedState) : null
            const newId = parsed ? parsed.items[parsed.items.length - 1].id + 1 : 0
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
        case "SET_TASKS": {
            return state
        }

        default:{
            return state
        }
    }
}

