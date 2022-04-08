import React from "react";
import {Rating} from "@mui/material";

export const Ranking = (props) => {
    return <Rating
        defaultValue={props.rank}
        onChange={(event, value) => {props.onRankChange(value)}}
        />
}