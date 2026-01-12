import { configureStore, createSlice } from "@reduxjs/toolkit";

// define action types
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

//define initial state
const initialState = {
  task: [],
  isLoading: false,
};

// ? RTK slice
const taskReducer = createSlice({
  name: "task",
  // initialState: initialState,
  initialState,
  reducers: {
    // here by default are action creators
    addTask(state, action) {
      // now we can mutate the data
      state.task.push(action.payload);
      // state.task=[...state.task,action.payload];
    },
    deleteTask(state, action) {
      state.task = state.task.filter((curTask, idx) => {
        return idx !== action.payload;
      });
    },
  },
});
// console.log("New slice", taskReducer);

export const { addTask, deleteTask } = taskReducer.actions;

//! (New style) step-2
export const store = configureStore({
  reducer: {
    // taskReducer: taskReducer,
    taskReducer: taskReducer.reducer,
  },
});

//!(new style) Step-3: Log the initial state
console.log("Initial state:", store.getState());
//!(new style) step-4:  dispatch an action to add a task.
console.log(store.dispatch(addTask("Buy LocalStudio")));
console.log(store.dispatch(addTask("Buy PDF")));

// middleware
export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const task = await res.json();
      // console.log(task);
      dispatch({
        type: FETCH_TASK,
        payload: task.map((curTask) => curTask.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
