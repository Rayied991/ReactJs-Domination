// const App = () => {
//   const btnClicked = () => {
//     console.log("Button is clicked");
//     return;
//   };

//   const inputChanging = (val) => {
//     console.log(val);
//   };
//   return (
//     <div>
//       <button onClick={btnClicked}>Click here</button>
//       <button
//         onDoubleClick={() => {
//           console.log("Hello guys!");
//         }}
//       >
//         Click here
//       </button>

//       <input
//         onChange={(ele) => {
//           inputChanging(ele.target.value);
//         }}
//         type="text"
//         placeholder="enter name"
//       />
//     </div>
//   );
// };

// export default App;
// function calling
// const App = () => {
//   return (
//     <div>
//       <div
//         className="box"
//         onMouseMove={(ele) => {
//           console.log(ele.clientY);
//         }}
//       ></div>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const pagescrolling = (ele) => {
    if (ele > 0) {
      console.log("scrolling straight");
    } else {
      console.log("Scrolling backward");
    }
  };
  return (
    <div
      onWheel={(ele) => {
        // console.log(ele.deltaY);
        pagescrolling(ele.deltaY);
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
