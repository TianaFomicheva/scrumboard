const initialState = {
    filter: null,
}

export default function filter(state = initialState, action) {
    switch (action.type) {
        case "SET_FILTER": {
            return{
                ...state,
                filter: action.payload
            }  
        }
        case "CLEAR_FILTER": {
            return{
                ...state,
                filter: null
            }  
        }
        default:
            return state
           
    }
}