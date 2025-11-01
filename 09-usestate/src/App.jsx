import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [userName, setUserName] = useState("Sarthak");
  function changeNumInc() {
    setNum(num + 1);
  }
  function changeNumDec() {
    if (num <= 0) {
      setNum(0);
    } else {
      setNum(num - 1);
    }
  }
  function changeUser() {
    setUserName("Rayied");
  }

  function JumpFive() {
    setNum(num + 5);
  }
  function Clear() {
    setNum(0);
  }
  return (
    <>
      <div className="h-20 w-full m-0 p-0  bg-blue-500 text-white flex justify-center items-center gap-10">
        <h1>Name is: {userName}</h1>
        <h1>Value is {num}</h1>
      </div>
      <div className="h-25 w-full flex justify-center items-center gap-12 ">
        <button onClick={changeNumInc} className="bg-gray-500 rounded-xl p-2">
          Increase num
        </button>
        <button onClick={changeNumDec} className="bg-gray-500 rounded-xl p-2">
          Decrease num
        </button>
        <button onClick={changeUser} className="bg-gray-500 rounded-xl p-2">
          Change name
        </button>
        <button onClick={JumpFive} className="bg-gray-500 rounded-xl p-2">
          Jump by 5
        </button>
        <button onClick={Clear} className="bg-red-500 rounded-xl p-2">
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
