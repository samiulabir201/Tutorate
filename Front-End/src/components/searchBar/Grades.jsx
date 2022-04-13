import React, {useEffect, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";

export const Grades = (props) => {
    const [grades, setGrades] = useState([]);

    useEffect(async () => {
        const res = await fetch(`http://localhost:8080/tutor/getAllGrades`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });
        setGrades(await res.json());
    })

    return <Autocomplete
        multiple
        freeSolo={props.allowNewValues}
        renderInput={(params) => <TextField {...params} label="Grades" required/>}
        options={grades}
        defaultValue={props.grades}
        onChange={(event, values) => props.onGradeChange(values)}
        fullWidth
        />
};
