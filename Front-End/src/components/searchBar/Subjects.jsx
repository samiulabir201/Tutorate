import React, {useEffect, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";

export const Subjects = (props) => {

  const [subjects, setSubjects] = useState([]);

  useEffect(async () => {
    const res = await fetch(`http://localhost:8080/tutor/getAllSubjects`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    setSubjects(await res.json());
  })

  return <Autocomplete
      multiple
      freeSolo={props.allowNewValues}
      renderInput={(params) => <TextField {...params} label="Subjects" required/>}
      options={subjects}
      defaultValue={props.subjects}
      onChange={(event, values) => props.onSubjectChange(values)}
      fullWidth
  />
};
