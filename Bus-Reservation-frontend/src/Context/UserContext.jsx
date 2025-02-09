import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Store user data (e.g., in local storage or using a secure mechanism)
    setUser(userData); 
    localStorage.setItem('user', JSON.stringify(userData)); 
  };

  const logout = () => {
    // Clear user data from state and local storage
    setUser(null); 
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};