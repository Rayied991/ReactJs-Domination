import { useState } from "react";
import App1 from "./App1";

const App = () => {
  // const [brand, setBrand] = useState("Ferrari");
  // const [model, setModel] = useState("Roma");
  // const [year, setYear] = useState("2023");
  // const [color, setColor] = useState("red");

  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red",
  });

  //spread operator used
  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };
  const changeColor2 = () => {
    setCar((prev) => {
      return { ...prev, color: "Red" };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={changeColor}>Blue</button>
      <button onClick={changeColor2}>Red</button>

      <App1 />
    </>
  );
};

export default App;
