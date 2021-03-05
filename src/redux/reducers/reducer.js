const initialState = {
    text: '',
    id: null,
    categoryId: null,

}

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK": {
            const serializedState = localStorage.getItem('state');
            const parsed = serializedState ? JSON.parse(serializedState) : null
            const newId = parsed ? parsed[parsed.length - 1].id + 1 : 0
            const newTask = {
                id: newId,
                text: action.payload.text,
                categoryId: action.payload.categoryId
            }
            const res = serializedState ?
                [...state,
                    newTask
                ] : [newTask]
            return res
        }
        default:
            return state
    }
}