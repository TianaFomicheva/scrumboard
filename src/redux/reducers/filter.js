const initialState = {
    filterVal:false


}


export default function tasks(state = initialState, action) {
    switch (action.type) {
        
        case "SET_FILTER": {
            return {...state, filterVal: action.payload}
        }
        default:
            return state
    }
}

