import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", title);
    setTitle(""); //reset
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
