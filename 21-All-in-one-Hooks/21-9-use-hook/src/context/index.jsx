import { createContext, use } from "react";

export const BioContext = createContext();
export const BioProvider = ({ children }) => {
  const myName = "Rayied";
  const myAge = 29;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

export const useBioContext = () => {
  const context = use(BioContext);
  if (context === undefined) {
    throw new Error("component must be wrapped with BioProvider");
  }
  return context;
};
