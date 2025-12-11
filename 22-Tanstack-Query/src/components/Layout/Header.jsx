import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to={"/"}>ReactQuery</NavLink>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/trad"}>FetchOld</NavLink>
          </li>
          <li>
            <NavLink to={"/rq"}>FetchRQ</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
