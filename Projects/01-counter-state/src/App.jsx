import { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  const IncreaseCount = (numVal) => {
    // setCount((prev) => prev + numVal + 1); //0+8+1 = 9
    // setCount((prev) => prev + 1); //9+1 = 10
    // setCount((prev) => prev + 1); //10+1 = 11
    setCount((prev) => prev + numVal);
  };

  const ResetCount = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Lets build our React Counter app.</h1>
      <div className="card">Count is {count}</div>
      <div>
        <button
          onClick={() => IncreaseCount(1)}
          style={{ margin: "0 5px" }}
          className="w-[100px] text-2xl bg-black-900 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200"
        >
          Increase
        </button>
        <button
          onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
          style={{ margin: "0 5px" }}
          className="w-[100px] text-2xl bg-black-900 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200"
        >
          Decrease
        </button>
        <button
          onClick={ResetCount}
          style={{ margin: "0 5px" }}
          className="w-[100px] text-2xl bg-black-900 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200"
        >
          Reset
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          style={{
            width: "100px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6em 1.2em",
          }}
          value={countToSet}
          onChange={(e) => setCountToSet(Number(e.target.value))}
          type="text"
        />
        <button
          className="w-[100px] text-2xl bg-black-900 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200"
          style={{ margin: "0 5px" }}
          onClick={() => {
            setCount(Number(countToSet));
            setCountToSet(0);
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </>
  );
};

export default App;
