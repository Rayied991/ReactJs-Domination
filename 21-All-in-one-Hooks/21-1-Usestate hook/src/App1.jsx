import { useState } from "react";

const App1 = () => {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    //will it increase by 4?
  };

  const IncreaseCount2 = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase by 1</button>
      <button onClick={IncreaseCount2}>Increase by 2</button>
      <button
        onClick={() => {
          if (count <= 0) {
            return;
          }
          setCount((count) => count - 1);
          setCount((count) => count - 1);
        }}
      >
        Decrease by 2
      </button>
    </>
  );
};

export default App1;
