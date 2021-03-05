const initialState ={
    text: '',
    id: null,
    categoryId: null,

}

export default function tasks(state = initialState, action){
    switch(action.type){
        case "ADD_TASK":{
            const serializedState = localStorage.getItem('state');
           
               const prevTasks = []
            const newTask = {                                            
                id: Date.now(),
                text: action.payload.text,
                categoryId: action.payload.categoryId
            }
            console.log(prevTasks)
            console.log(prevTasks[0])
            if(serializedState !== null){
                prevTasks.push(JSON.parse(serializedState))
            }

            

 

            const res =  (serializedState !== null) ?
                [...state,
                 newTask
                ] : [
                    newTask
                   ]
                console.log(res)
                return res
            }                                  
        default:
            return state
    }
}