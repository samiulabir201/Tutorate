import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RateForm} from "./RateForm";

export const TutorProfile = () => {
    let { id } = useParams();
    const [tutor, setTutor] = useState({});
    const [image, setImage] = useState('/profile.png')
    const [formShown, setFormShown] = useState(false);

    const getTutor = async () => {
        const res = await fetch(`http://localhost:8080/tutor/${id}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });
        setTutor(await res.json());
    }

    useEffect(async () => {
        await getTutor();
    })

    return (
        <div className="mt-10 container">
            <div className="card ml-10 col-xl-3">
                <div className="card-body">
                    <img src={image} className="mx-auto img-fluid rounded-circle mb-2" width="128" height="128" alt=""/>
                    <h4 className="mb-3 fw-bold fs-4 text-center">{tutor.name}</h4>
                    <p className="mb-2">Location: {tutor.location}</p>
                    <p className="mb-2">Contact: {tutor.phone}</p>
                    <p className="mb-2">Grades: {tutor.grades}</p>
                    <p className="mb-2">Subjects: {tutor.subjects}</p>
                    <p className="mb-2">Rating: {tutor.average_rating}</p>
                    <p>Fees: BDT {tutor.min_wage}</p>
                    <button className="button" type="submit" 
                    onClick={() => {setFormShown(true)}}
                    >Rate</button>
                    <RateForm show={formShown} onHide={() => setFormShown(false)} tutor_id={id}/>
                </div>
            </div>
        </div>
    );
}