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


export const removeTask = id => {
    return {
      type: "REMOVE_TASK",
      payload:{
        id: id
      }
    }
  }
export const filterTasks = filter => {
    return {
      type: "FILTER_TASKS",
      payload:{
        filter: filter
      }
    }
  }


