import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/tasks/TaskSlice";

//! (New style) step-2
export const store = configureStore({
  reducer: {
    // taskReducer: taskReducer,
    taskReducer: taskReducer.reducer,
  },
});
// middleware
// export const fetchTask = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=3"
//       );
//       const task = await res.json();
//       // console.log(task);
//       dispatch({
//         type: FETCH_TASK,
//         payload: task.map((curTask) => curTask.title),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
