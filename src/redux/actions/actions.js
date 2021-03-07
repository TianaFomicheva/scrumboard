export const addTask = payload => {
    return {
      type: "ADD_TASK",
      payload
    };
  };
export const editTask = payload => {
    return {
      type: "EDIT_TASK",
      payload
    };
  };


  export const setTasks = (items)=>({
    type: 'SET_TASKS',
    payload: items
    
    })
   