import { createSlice } from "@reduxjs/toolkit";

//define initial state
const initialState = {
  task: [],
  isLoading: false,
};

// ? RTK slice
export const taskReducer = createSlice({
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
export default taskReducer.reducer;
