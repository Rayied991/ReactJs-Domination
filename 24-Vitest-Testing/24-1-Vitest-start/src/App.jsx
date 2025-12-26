import "./App.css";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greetings";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Greeting name={"Rayied"} />
      <Counter />
      <UserProfile userId={4} />
    </>
  );
}

export default App;
