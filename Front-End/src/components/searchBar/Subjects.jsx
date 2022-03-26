import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const options = [
  { value: 'Chocolate', label: 'Chocolate' },
  { value: 'Strawberry', label: 'Strawberry' },
  { value: 'Vanilla', label: 'Vanilla' },
];

export const Subjects = (props) => {
  const getInitValues = () => props.subjects?.map((val) => ({ label: val, value: val }));
  const changeHandler = (event) => {
    const values = [];
    for (let i = 0; i < event.length; i += 1) {
      values.push(event[i].value);
    }
    props.onSubjectChange(values);
  };
  // eslint-disable-next-line react/destructuring-assignment
  return (<Select components={makeAnimated()} defaultValue={getInitValues()} isMulti options={options} onChange={changeHandler} />);
};
