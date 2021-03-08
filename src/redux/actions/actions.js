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

export const removeTask = id => {
    return {
      type: "REMOVE_TASK",
      payload:{
        id: id
      }
    };
  };




  // export const setTasks = (items)=>({
  //   type: 'SET_TASKS',
  //   payload: items
    
  //   })
   