import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
const Todo = () => {
  const tasks = useSelector((state) => state.taskReducer.task);
  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h1>
            <i className="fa-regular fa-pen-to-square"></i>To-do List:
          </h1>
          <div className="row">
            <form>
              <input type="text" id="input-box" placeholder="Add a new Task" />
              <button>Add Task</button>
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
                    <MdDeleteForever className="icon-style" />
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
