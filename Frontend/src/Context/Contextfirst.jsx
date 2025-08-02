import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [email, setemail] = useState(false);

  return (
    <AppContext.Provider value={{ email, setemail }}>
      {children}
    </AppContext.Provider>
  );
};
