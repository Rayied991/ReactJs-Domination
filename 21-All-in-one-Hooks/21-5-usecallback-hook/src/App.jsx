import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0);

  // const newFn = useCallback((counter) => {}, [counter]);//re-render
  const newFn = useCallback(() => {}, []); //no re-render

  return (
    <>
      {/*  re render again create newFn new instance 
    newFn changing in every re-render
    solve:usecallback
    */}
      <Header newFn={newFn} />
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Click Here
      </button>
    </>
  );
}

export default App;
