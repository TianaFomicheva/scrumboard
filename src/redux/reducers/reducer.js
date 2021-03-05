const initialState ={
    text: '',
    id: null,
    categoryId: null,

}

export default function tasks(state = initialState, action){
    switch(action.type){
        case "ADD_TASK":{
            const res = {                                            
                    id: Date.now(),
                    text: action.payload.text,
                    categoryId: action.payload.categoryId
                }
                
                console.log(res)
                return res  
            }                                  
        default:
            return state
    }
}