import React from 'react';
import {Autocomplete, TextField} from "@mui/material";

export const Subjects = (props) => {
  const options = ["Chemistry", "Physics"];

  return <Autocomplete
      multiple
      renderInput={(params) => <TextField {...params} label="Subjects" />}
      options={options}
      defaultValue={props.subjects}
      onChange={(event, values) => props.onSubjectChange(values)}
  />
};
