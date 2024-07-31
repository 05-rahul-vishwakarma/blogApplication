/* eslint-disable react/prop-types */
// context/UserContext.js
import { createContext, useState, useContext } from 'react';

// Create the UserContext
const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
