import { store } from "../../store";
import { addTask, deleteTask } from "./TaskSlice";

//!(new style) Step-3: Log the initial state
console.log("Initial state:", store.getState());
//!(new style) step-4:  dispatch an action to add a task.
console.log(store.dispatch(addTask("Buy LocalStudio")));
console.log(store.dispatch(addTask("Buy PDF")));
console.log(store.dispatch(deleteTask(1)));
