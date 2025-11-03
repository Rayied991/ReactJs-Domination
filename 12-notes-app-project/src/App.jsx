import { useState } from "react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    // console.log(copyTask);
    console.log("Form submitted", title, details);
    setTitle("");
    setDetails("");
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
    // console.log("INputted", e.target.value);
  };
  const handleDetailedInput = (e) => {
    setDetails(e.target.value);
    // console.log("details", e.target.value);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen lg:flex  bg-black text-white gap-10 ">
      <form
        className="flex items-start  flex-col  gap-4 p-10 lg:w-1/2  "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        {/* 1st input for heading */}
        <input
          type="text"
          placeholder="Enter notes Heading"
          value={title}
          onChange={(e) => {
            handleInput(e);
          }}
          className="px-5 w- font-medium border-2 outline-none  py-2 b-2 rounded "
        />
        {/* detailed input */}
        <textarea
          type="text"
          className="px- font-medium  w-full h-32 border-2 outline-none py-2 flex items-start flex-row b-2 rounded "
          placeholder="Write details"
          value={details}
          onChange={(e) => {
            handleDetailedInput(e);
          }}
        />
        <button className="bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className=" p-10 lg:border-l-2  lg:w-1/2 ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start  gap-5 mt-6 h-[90%] overflow-auto">
          {task.map((ele, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black py-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] "
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {ele.title}
                  </h3>
                  <p className="mt-2 text-sm leading-tight font-medium text-gray-700">
                    {ele.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
