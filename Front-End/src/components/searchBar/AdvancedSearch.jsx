import React, {useEffect, useState} from 'react';
import ReactModal from 'react-modal';
import { Subjects } from './Subjects';
import { useStateContext } from '../../contexts/StateContextProvider';
import { WageRange } from './WageRange';
import '../../stylesheets/AdvancedSearch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Ranking} from "./Ranking";
import {Grades} from "./Grades";

export const AdvancedSearch = (props) => {
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);
  const [wages, setWages] = useState([200, 2000]);
  const [rank, setRank] = useState(0);
  const { searchParams, setSearchParams } = useStateContext();

  const updateParams = () => {
    const newParams = { subjects, wages, rank, grades };
    setSearchParams(newParams);
    props.onHide();
  };

  return (
    <ReactModal
      isOpen={props.show}
      onRequestClose={props.onHide}
      className="AdvancedSearch"
      overlayClassName="AdvancedSearchOverlay"
    >
      <div className="optionsContainer">
        <div className="d-inline-flex">
          <p className="align-self-center me-5">Subjects:</p>&nbsp;&nbsp;<Subjects subjects={searchParams.subjects} onSubjectChange={(newSubjects) => setSubjects(newSubjects)} />
        </div>
        <div className="d-inline-flex">
          <p className="align-self-center me-5">Grades:</p>&nbsp;&nbsp;<Grades grades={searchParams.grades} onGradeChange={(newGrades) => setGrades(newGrades)} />
        </div>
        <div className="d-inline-flex">
          <p className="align-self-center me-5">Wages:</p><WageRange wages={searchParams.wages} onWageChange={(newWages) => setWages(newWages)} />
        </div>
        <div className="d-inline-flex">
          <p className="align-self-center me-5">Ranking:</p><Ranking rank={searchParams.rank} onRankChange={(newRank) => setRank(newRank)} />
        </div>
        <div className="d-inline-flex">
          <button className="button" type="button" onClick={updateParams}>Search</button>
          <button className="button" type="button" onClick={props.onHide}>Cancel</button>
        </div>
      </div>
    </ReactModal>
  );
};
