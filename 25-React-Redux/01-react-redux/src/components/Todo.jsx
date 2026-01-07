import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../store";
const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();
  const handleTaskDelete = (id) => {
    return dispatch(deleteTask(id));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    return setTask("");
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
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button>Add Task</button>
            </form>
          </div>
          <ul id="list-container">
            {tasks.map((curTask, idx) => {
              return (
                <li key={idx}>
                  <p>
                    {idx + 1}:{curTask}
                  </p>
                  <div>
                    <MdDeleteForever
                      className="icon-style"
                      onClick={() => handleTaskDelete(idx)}
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
