import { createStore } from "redux";
/* eslint-disable no-case-declarations */
// define action types
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
  isLoading: false,
};
// step-1: create a simple reducer function
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

// step-2: create Redux store using the reducer
export const store = createStore(taskReducer);
console.log(store);
// step-3: log the initial state
// The getState method is a synchronous function that returns the current state of Redux application. It incldes the entire state of the application, including reducers and their respective states.

console.log("initial state:", store.getState());

// step-4(old):  dispatch an action to add a task.
// store.dispatch({ type: ADD_TASK, payload: "Buy LocalStudio" });
// console.log("updated state: ", store.getState());

// store.dispatch({ type: ADD_TASK, payload: "Buy pdf" });
// console.log("updated state: ", store.getState());

// store.dispatch({ type: DELETE_TASK, payload: 1 });
// console.log("deleted state: ", store.getState());

//step-5: create action creators

const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};
// step-4(new):  dispatch an action to add a task.

store.dispatch(addTask("Buy LocalStudio"));
console.log("updated state: ", store.getState());

store.dispatch(addTask("Buy pdf"));
console.log("updated state: ", store.getState());

const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

store.dispatch(deleteTask(1));
console.log("deleted state: ", store.getState());
