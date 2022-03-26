import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useState({});
  const [advancedSearch, setAdvancedSearch] = useState(false);

  // eslint-disable-next-line no-shadow
  const getResults = async (searchTerm) => {
    setLoading(true);

    const res = await fetch(`http://localhost:8080/tutor/getTutors?searchTerm=${searchTerm}`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{
      getResults,
      results,
      searchTerm,
      setSearchTerm,
      loading,
      advancedSearch,
      setAdvancedSearch,
      searchParams,
      setSearchParams }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
