// without lazyloading
// import { useState } from "react";
// import User from "./User";

// const App = () => {
//   const [load, setLoad] = useState(false);
//   return (
//     <div>
//       <h1>Lazy Loading</h1>
//       {load ? <User /> : false}
//       <button onClick={() => setLoad(true)}>Load User</button>
//     </div>
//   );
// };

// export default App;

// LazyLoading
import { lazy, Suspense, useState } from "react";
const User = lazy(() => import("./User"));
const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <h1>Lazy Loading</h1>
      {load ? (
        <Suspense fallback={<h3>Loading...</h3>}>
          <User />
        </Suspense>
      ) : (
        false
      )}
      <button onClick={() => setLoad(true)}>Load User</button>
    </div>
  );
};

export default App;
