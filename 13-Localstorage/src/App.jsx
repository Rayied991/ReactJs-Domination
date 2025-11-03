const App = () => {
  localStorage.setItem("age", 25);
  const user = localStorage.getItem("user");
  const age = localStorage.getItem("age");
  console.log(user, age);

  localStorage.removeItem("user");
  localStorage.removeItem("age");

  const u1 = {
    username: "rayied",
    age: 25,
    city: "Gazipur",
  };
  localStorage.setItem("user", JSON.stringify(u1));

  const getu1 = localStorage.getItem("user");
  console.log(typeof getu1);

  const u2 = JSON.parse(localStorage.getItem("user"));
  return <div>App</div>;
};

export default App;
