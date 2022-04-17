import ReactModal from "react-modal";
import React, {useEffect, useState} from "react";
import {useStateContext} from "../contexts/StateContextProvider";
import {useHistory} from "react-router-dom";


import {Subjects} from "./searchBar/Subjects";
import {Grades} from "./searchBar/Grades";
import {Location} from "./Location";
import "../stylesheets/TutorProfileForm.css";

import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';


export const RateForm = (props) => {
    const {user, setUser} = useStateContext();

    const [patience,setPatience]=useState(1);
    const[punctuality,setPunctuality]=useState(1);
    const[effectiveness,setEffectiveness]=useState(1);
    const[clear_understanding,setClearUnderstanding]=useState(1);
    const history = useHistory();

    const rateTutor = async (event) => {
        event.preventDefault();

        props.onHide();
        const res = await fetch(`http://localhost:8080/tutor/rate?tutor_id=${props.tutor_id}&list=${punctuality},${effectiveness},${clear_understanding},
        ${patience}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });
        
    }

    return (
        <ReactModal
            isOpen={props.show}
            onRequestClose={() => props.onHide()}
            className="TutorProfileForm"
            overlayClassName="TutorProfileFormOverlay"
        >
            <h3 className="fs-2 heading text-center">Rate</h3>
            <form onSubmit={rateTutor} className="optionsContainer">
            <label for="punctuality">Punctuality:</label>
             <select id="punctuality" value={punctuality} onChange={e=>setPunctuality(e.currentTarget.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    </select>
    <label for="effectiveness">Effectiveness:</label>
             <select id="effectiveness" value={effectiveness} onChange={e=>setEffectiveness(e.currentTarget.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    </select>

    <label for="clear_understanding" >clear understanding:</label>
             <select id="clear_understanding" value={clear_understanding} onChange={e=>setClearUnderstanding(e.currentTarget.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    </select>
    <label for="patience">Patience:</label>
             <select id="patience" value={patience} onChange={e=>setPatience(e.currentTarget.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    </select>
    <div>{props.tutor_id}</div>
    <button className="button" type="submit">Submit</button>
    
            </form>
        </ReactModal>
    );
}