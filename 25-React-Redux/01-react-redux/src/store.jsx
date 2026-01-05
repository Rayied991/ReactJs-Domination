/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, idx) => {
        return idx !== action.payload;
      });
      return { ...state, task: updatedTask };
    default:
      return state;
  }
};
