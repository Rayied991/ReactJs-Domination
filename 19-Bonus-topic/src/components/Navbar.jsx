const Navbar = (props) => {
  const changeTheme = () => {
    props.setTheme("dark");
  };
  return (
    <div>
      <p>{props.Theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
