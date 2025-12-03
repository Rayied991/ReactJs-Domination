import { createContext } from "react";

const Appcontext = createContext();

export const ContextProvider = ({ children }) => {
  const phone = "+8801615972128";
  const name = "Alinur Boss";

  return (
    <Appcontext.Provider value={{ phone, name }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Appcontext;
