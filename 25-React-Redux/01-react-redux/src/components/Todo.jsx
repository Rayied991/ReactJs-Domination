import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
const Todo = () => {
  const tasks = useSelector((state) => state.task);
  // console.log(state.task);

  const handleTaskDelete = (idx) => {};
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
