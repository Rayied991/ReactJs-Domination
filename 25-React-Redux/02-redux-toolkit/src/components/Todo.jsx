import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../store";
const Todo = () => {
  const [userTask, setUserTask] = useState("");
  const tasks = useSelector((state) => state.taskReducer.task);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userTask));
    setUserTask("");
  };
  const handleDeleteTask = (idx) => {
    return dispatch(deleteTask(idx));
  };

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h1>
            <i className="fa-regular fa-pen-to-square"></i>To-do List:
          </h1>
          <div className="row">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                id="input-box"
                placeholder="Add a new Task"
                value={userTask}
                onChange={(e) => setUserTask(e.target.value)}
              />
              <button type="submit">Add Task</button>
            </form>
          </div>
          {/* <button onClick={handleFetchTasks}>Fetch Tasks</button> */}
          <ul id="list-container">
            {tasks?.map((curTask, idx) => {
              return (
                <li key={idx}>
                  <p>
                    {idx + 1}:{curTask}
                  </p>
                  <div>
                    <MdDeleteForever
                      className="icon-style"
                      onClick={() => handleDeleteTask(idx)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
