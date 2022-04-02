import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useState({});
  const [advancedSearch, setAdvancedSearch] = useState(false);

  // eslint-disable-next-line no-shadow,no-use-before-define
  const getResults = async (searchTerm, params = searchParams) => {
    setLoading(true);

    const res = await fetch(`http://localhost:8080/tutor/getTutors?searchTerm=${searchTerm}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  const setNewSearchParams = (newParams) => {
    setSearchParams(newParams);
    getResults(searchTerm, newParams);
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
      setNewSearchParams }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
