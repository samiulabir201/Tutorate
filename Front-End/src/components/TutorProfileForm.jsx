import ReactModal from "react-modal";
import React, {useState} from "react";
import {Subjects} from "./searchBar/Subjects";
import {Grades} from "./searchBar/Grades";
import {Location} from "./Location";
import "../stylesheets/TutorProfileForm.css";

export const TutorProfileForm = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [grades, setGrades] = useState([]);
    const [wage, setWage] = useState(0);

    const createProfile = (event) => {
        event.preventDefault();

        props.onHide();
        fetch(`http://localhost:8080/tutor/add`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, location, phone, grades, subjects, "min_wage": wage}),
        });
    }
    return (
        <ReactModal
            isOpen={props.show}
            onRequestClose={() => props.onHide()}
            className="TutorProfileForm"
            overlayClassName="TutorProfileFormOverlay"
        >
            <form onSubmit={createProfile} className="optionsContainer">
                <div className="d-inline-flex">
                    <p className="align-self-center me-5">Name:</p>&nbsp;&nbsp;
                    <input name="name" type="text" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="d-inline-flex">
                    <p className="align-self-center me-5">Phone:</p>&nbsp;&nbsp;
                    <input name="phone" type="text" onChange={(event) => setPhone(event.target.value)}/>
                </div>
                <div className="d-inline-flex">
                    <p className="align-self-center me-5">Location:</p>&nbsp;&nbsp;
                    <Location onLocationChange={setLocation} />
                </div>
                <div className="d-inline-flex">
                    <p className="align-self-center me-5">Subjects:</p>&nbsp;&nbsp;
                    <Subjects subjects={[]} onSubjectChange={setSubjects} />
                </div>
                <div className="d-inline-flex">
                    <p className="align-self-center me-5">Grades:</p>&nbsp;&nbsp;
                    <Grades grades={[]} onGradeChange={setGrades} />
                </div>
                <div className="d-inline-flex">
                    <p className="align-self-center me-5">Wages:</p>
                    <input name="wage" type="number" onChange={(event) => setWage(event.target.value)}/>
                </div>
                <div className="d-inline-flex">
                    <button className="button" type="submit">Submit</button>
                    <button className="button" type="button" onClick={() => props.onHide()}>Cancel</button>
                </div>
            </form>
        </ReactModal>
    );
}