import ReactModal from "react-modal";
import React, {useState} from "react";
import "../stylesheets/RateForm.css";
import Grid from "@mui/material/Grid";
import {Ranking} from "./searchBar/Ranking";
import {TextField} from "@mui/material";


export const RateForm = (props) => {
    const [patience, setPatience] = useState(0);
    const [punctuality, setPunctuality] = useState(0);
    const [effectiveness, setEffectiveness] = useState(0);
    const [clarity, setClarity] = useState(0);

    const rateTutor = async (event) => {
        event.preventDefault();

        props.onHide();
        const res = await fetch(`http://localhost:8080/tutor/rate?tutor_id=${props.tutor_id}&list=${punctuality},${effectiveness},${clarity},
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
            className="RateForm"
            overlayClassName="RateFormOverlay"
        >
            <h3 className="fs-4 heading">Review</h3>
            <form onSubmit={rateTutor} className="optionsContainer">
                <Grid container spacing={4}>
                    <Grid item xs={2} className="d-inline-flex">
                        <p>Punctuality:</p>
                    </Grid>
                    <Grid item xs={4} className="d-inline-flex">
                        <Ranking rank={punctuality} onRankChange={(newValue) => setPunctuality(newValue)} />
                    </Grid>
                    <Grid item xs={2} className="d-inline-flex">
                        <p>Effectiveness:</p>
                    </Grid>
                    <Grid item xs={4} className="d-inline-flex">
                        <Ranking rank={effectiveness} onRankChange={(newValue) => setEffectiveness(newValue)} />
                    </Grid>
                    <Grid item xs={2} className="d-inline-flex">
                        <p>Clarity:</p>
                    </Grid>
                    <Grid item xs={4} className="d-inline-flex">
                        <Ranking rank={clarity} onRankChange={(newValue) => setClarity(newValue)} />
                    </Grid>
                    <Grid item xs={2} className="d-inline-flex">
                        <p>Patience:</p>
                    </Grid>
                    <Grid item xs={4} className="d-inline-flex">
                        <Ranking rank={patience} onRankChange={(newValue) => setPatience(newValue)} />
                    </Grid>
                    <Grid item xs={12}>
                        <p className="mb-2">Review:</p>
                        <TextField className="mb-4" variant="outlined" multiline rows={4} fullWidth/>
                    </Grid>
                </Grid>
                <div className="d-inline-flex mx-auto my-0">
                    <button className="button" type="submit">Submit</button>
                </div>
            </form>
        </ReactModal>
    );
}