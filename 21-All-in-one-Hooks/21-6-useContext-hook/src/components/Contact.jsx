import { useContext } from "react";
import Appcontext from "../context/AppContext";

const Contact = () => {
  const { phone, name } = useContext(Appcontext);

  return (
    <div>
      <h2>Contact</h2>
      <h3>Phone: {phone}</h3>
      <h3>Name: {name}</h3>
    </div>
  );
};

export default Contact;
