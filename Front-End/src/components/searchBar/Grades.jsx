import React from 'react';
import {Autocomplete, TextField} from "@mui/material";

export const Grades = (props) => {
    const options = ["Class 1", "Class 2"];
    return <Autocomplete
        multiple
        renderInput={(params) => <TextField {...params} label="Grades" />}
        options={options}
        defaultValue={props.grades}
        onChange={(event, values) => props.onGradeChange(values)}
        />
};
