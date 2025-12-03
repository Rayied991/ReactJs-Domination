import { useContext } from "react";
import Appcontext from "../context/AppContext";

const Footer = () => {
  const { phone } = useContext(Appcontext);
  return (
    <div>
      <h2>Footer</h2>
      <h3>Phone:{phone}</h3>
    </div>
  );
};

export default Footer;
