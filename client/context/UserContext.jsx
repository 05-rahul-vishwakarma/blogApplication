/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// UserContext.js
import React, { createContext, useState } from 'react';

// Create a context with a default value
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
