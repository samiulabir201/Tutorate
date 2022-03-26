import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      getResults(searchTerm);
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  return (
    <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
      {results?.map((result, index) => (
        <div key={index} className="md:w-2/5 w-full">
          <a href={result.id} target="_blank" rel="noreferrer">
            <p className="text-sm">{result.id}</p>
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{result.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
