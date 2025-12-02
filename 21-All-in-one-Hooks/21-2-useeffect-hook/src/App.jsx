import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rayied");

  // useEffect(cb, [dependecy]); //callback must, but dependency optional
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count, name]);
  return (
    <>
      <h1>I've rendered {count} Times!</h1>
    </>
  );
}

export default App;
