import "./App.css";

function App() {
  let age = 16;

  //way-1[DRY violates]
  // if (age < 18) {
  //   return (
  //     <div>
  //       <div>
  //         <img
  //           src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
  //           alt=""
  //         />
  //       </div>
  //       <button>Not Available</button>
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div>
  //       <div>
  //         <img
  //           src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
  //           alt=""
  //         />
  //       </div>
  //       <button>Watch Now</button>
  //     </div>
  //   );
  // }

  // way-2
  // return (
  //   <div>
  //     <div>
  //       <img
  //         src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
  //         alt=""
  //       />
  //     </div>
  //     <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
  //   </div>
  // );

  //way-3
  // let canWatch = "Not Available";
  // if (age >= 18) canWatch = "Watch Now";
  // return (
  //   <div>
  //     <div>
  //       <img
  //         src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
  //         alt=""
  //       />
  //     </div>
  //     <button>{canWatch}</button>
  //   </div>
  // );

  //way-4

  const canWatch = () => {
    if (age >= 18) return "Watch now";
    else return "Not available";
  };
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <button>{canWatch()}</button>
    </div>
  );
}

export default App;
