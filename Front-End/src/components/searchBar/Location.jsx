import React from "react";
import {Autocomplete, TextField} from "@mui/material";

export const Location = (props) => {
    const locations = ['Banani', 'Dhanmondi'];
    return <Autocomplete
        renderInput={(params) => <TextField {...params} label="Location" />}
        options={locations}
        value={props.location}
        onChange={props.onLocationChange}
    />
}