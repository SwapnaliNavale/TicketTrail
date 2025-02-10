import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // cosnt [totalFair, setTotalfair] = useState(0);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('token');
  //   console.log("storedUser: "+ storedUser); //if null
  //   // change getItem to token
    
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);
  useEffect(() => {
    const storedToken = localStorage.getItem('token'); 
    if (storedToken) {
      setUser({ token: storedToken }); 
    }
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};