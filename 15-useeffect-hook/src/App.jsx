// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);
//   useEffect(
//     function () {
//       console.log("Useeffect is running....");
//     },
//     [num]
//   );
//   return (
//     <div>
//       <h1> num is {num}</h1>
//       <h1> num2 is {num2}</h1>
//       <button
//         onMouseEnter={() => {
//           setNum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 10);
//         }}
//       >
//         Hover
//       </button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(100);

  useEffect(
    function () {
      bChanging();
    },
    [b]
  );
  useEffect(
    function () {
      aChanging();
    },
    [a]
  );
  function aChanging() {
    console.log("a changed");
  }
  function bChanging() {
    console.log("b changed");
  }
  return (
    <div>
      <h1>a:{a}</h1>
      <h1>b:{b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change a
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change-b
      </button>
    </div>
  );
};

export default App;
