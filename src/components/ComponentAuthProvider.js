import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const [eid, setEid] = useState();

  const login = (username, eid) => {
    setUsername(username);
    setEid(eid);
  };

  return (
    <Context.Provider value={{ login, username, eid }}>
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};
