import React, { createContext, useContext, useState, useEffect } from "react";

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
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setUser({ token: storedToken });
    }
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("token", JSON.stringify(newUser));
  };
  // Function to update authentication state
  const setAuth = (userData) => {
    if (userData) {
      localStorage.setItem("token", userData.token); // Store token in localStorage
      setUser(userData);
    } else {
      localStorage.removeItem("token"); // Remove token on logout
      setUser(null);
    }
  };
  // const logout = () => {
  //   setUser(null);
  //   localStorage.removeItem('token');
  // };

  return (
    <UserContext.Provider value={{ user, updateUser, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
