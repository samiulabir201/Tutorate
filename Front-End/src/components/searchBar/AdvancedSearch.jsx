import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Subjects } from './Subjects';
import { useStateContext } from '../../contexts/StateContextProvider';
import { WageRange } from './WageRange';
import '../../stylesheets/AdvancedSearch.css';

export const AdvancedSearch = () => {
  const { advancedSearch, setAdvancedSearch } = useStateContext();
  const [subjects, setSubjects] = useState([]);
  const [wages, setWages] = useState([200, 2000]);
  const { searchParams, setNewSearchParams } = useStateContext();

  const updateParams = () => {
    const newParams = { subjects, wages };
    setNewSearchParams(newParams);
    setAdvancedSearch(false);
  };

  return (
    <ReactModal
      isOpen={advancedSearch}
      className="AdvancedSearch"
      overlayClassName="AdvancedSearchOverlay"
    >
      <div className="optionsContainer">
        Subjects: <Subjects subjects={searchParams.subjects} onSubjectChange={(newSubjects) => setSubjects(newSubjects)} />
        Wages: <WageRange wages={searchParams.wages} onWageChange={(newWages) => setWages(newWages)} />
        <button type="button" onClick={updateParams}>
          Search
        </button>
        <button type="button" onClick={() => setAdvancedSearch(false)}>
          Cancel
        </button>
      </div>
    </ReactModal>
  );
};
