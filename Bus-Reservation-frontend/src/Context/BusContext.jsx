// import React, { createContext, useContext, useState } from 'react';

// const BusContext = createContext();

// export const BusProvider = ({ children }) => {
//   const [buses, setBuses] = useState([]);
//   const useBus = () => useContext(BusContext); // Define useBus inside the provider
//   return (
//     <BusContext.Provider value={{ buses, setBuses }}>
//       {children}
//     </BusContext.Provider>
//   );
// };

//  export const useBus = () => {
//   return useContext(BusContext);
// };


import React, { createContext, useContext, useState } from 'react';

const BusContext = createContext();

export const BusProvider = ({ children }) => {
  const [buses, setBuses] = useState([]);

  return (
    <BusContext.Provider value={{ buses, setBuses }}>
      {children}
    </BusContext.Provider>
  );
};

// Correctly export `useBus`
export const useBus = () => {
  return useContext(BusContext);
};
