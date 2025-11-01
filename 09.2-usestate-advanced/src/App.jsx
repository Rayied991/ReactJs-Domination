import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [n1, setN1] = useState({ user: "Rayied", age: 20 });
  const [n2, setN2] = useState([10, 20, 30]);
  const [batchUpdate, setbatchUpdate] = useState(10);

  const btnClicked = () => {
    // setNum(0); //for this react will not re-render; because
    // react identifies that you are inserting same value or not

    setNum(num + 5);
    console.log(num); //0 [because of asyncronous]
  };

  const btnChange = () => {
    //way-1
    // change array/object values
    // const newNum = { ...n1 };
    // console.log(newNum);
    // newNum.user = "Aman";
    // newNum.age = 27;
    // setN1(newNum);
    //way-2
    setN1((prev) => ({ ...prev, age: 50 }));
  };
  const btnChangeArr = () => {
    //way01
    // change array/object values
    const newNum = [...n2];
    console.log(newNum);
    newNum.push(97);
    setN2(newNum);
    //way02
    // setN2((prev) => []);
  };

  const up = () => {
    // setbatchUpdate(batchUpdate + 1);
    // setbatchUpdate(batchUpdate + 1);
    // setbatchUpdate(batchUpdate + 1);
    // instead of updating 3 it will update only 1
    setbatchUpdate((prev) => prev + 1);
    setbatchUpdate((prev) => prev + 1);
    setbatchUpdate((prev) => prev + 1);
    // now it will increase by 3
  };
  return (
    <>
      <div>
        <h1>
          {num},{n1.user},{n1.age}
        </h1>
        <br />
        <h1>{n2}</h1>
        <br />
        <h1>{batchUpdate}</h1>
        <button onClick={btnClicked}>Change Num</button>
        <button onClick={btnChange}>Click</button>
        <button onClick={btnChangeArr}>Click2</button>
        <button onClick={up}>Batch update</button>
      </div>
    </>
  );
};

export default App;
