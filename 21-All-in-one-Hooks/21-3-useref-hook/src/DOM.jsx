import { useRef } from "react";

const DOM = () => {
  const inputElem = useRef();
  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "Blue";
  };
  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Click Here</button>
    </>
  );
};

export default DOM;
