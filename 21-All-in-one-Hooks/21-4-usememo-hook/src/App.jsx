import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation Done!");
    return Math.pow(num, 3);
  }

  // const res=cubeNum(num); //old
  const res = useMemo(() => cubeNum(num), [num]);
  //execute cubenum function when num gets changed
  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <h1>Cube of the Number: {res}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter++
      </button>
      <h1>Counter : {counter}</h1>
    </>
  );
}

export default App;
