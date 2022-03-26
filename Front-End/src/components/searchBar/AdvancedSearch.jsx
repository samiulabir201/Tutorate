import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Subjects } from './Subjects';
import { useStateContext } from '../../contexts/StateContextProvider';
import { WageRange } from './WageRange';

export const AdvancedSearch = (props) => {
  const { advancedSearch, setAdvancedSearch } = useStateContext();
  const [subjects, setSubjects] = useState([]);
  const [wages, setWages] = useState([200, 2000]);
  const { searchParams, setSearchParams } = props;

  const updateParams = () => {
    const newParams = { subjects, wages };
    setSearchParams(newParams);
    setAdvancedSearch(false);
  };

  return (
    <ReactModal
      isOpen={advancedSearch}
    >
      Subjects: <Subjects subjects={searchParams.subjects} onSubjectChange={(newSubjects) => setSubjects(newSubjects)} />
      Wages: <WageRange wages={searchParams.wages} onWageChange={(newWages) => setWages(newWages)} />
      <button type="button" onClick={updateParams}>
        Search
      </button>
      <button type="button" onClick={() => setAdvancedSearch(false)}>
        Cancel
      </button>
    </ReactModal>
  );
};
