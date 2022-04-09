import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useState({});

  return (
    <StateContext.Provider value={{
        user, setUser,
        searchTerm, setSearchTerm,
        searchParams, setSearchParams
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
