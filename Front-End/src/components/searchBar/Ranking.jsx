import React from "react";
import {Rating} from "@mui/material";

export const Ranking = (props) => {
    return <Rating
        value={props.rank}
        onChange={props.onRankChange}
        />
}