export const addTask = payload => {
    return {
      type: "ADD_TASK",
      payload
    }
  }
export const editTask = payload => {
    return {
      type: "EDIT_TASK",
      payload
    }
  }
export const editTaskCategory = payload => {
    return {
      type: "EDIT_TASK_CATEGORY",
      payload
    }
  }
export const setTasks = payload => {
    return {
      type: "SET_TASKS",
      payload
    }
  }


export const removeTask = id => {
    return {
      type: "REMOVE_TASK",
      payload:{
        id: id
      }
    }
  }


