import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TutorProfile = () => {
    let { id } = useParams();
    const [name, setName] = useState('');
    const [wage, setWage] = useState(0);
    const [subjects, setSubjects] = useState([]);
    const [image, setImage] = useState('/profile.png')

    const getTutor = async () => {
        const res = await fetch(`http://localhost:8080/tutor/${id}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });
        let tutor = await res.json();
        setName(tutor.name);
        setWage(tutor.min_wage);
        setSubjects(tutor.subjects);
    }

    useEffect(async () => {
        await getTutor();
    })

    return (
        <div className="mt-10 container">
            <div className="card ml-10 col-xl-2">
                <div className="card-body">
                    <img src={image} className="mx-auto img-fluid rounded-circle mb-2" width="128" height="128" alt=""/>
                    <h4 className="mb-3 fw-bold fs-4 text-center">{name}</h4>
                    <p className="mb-2">Rating:</p>
                    <p className="mb-2">Location:</p>
                    <p className="mb-2">Contact:</p>
                    <p className="mb-2">Grades:</p>
                    <p className="mb-2">Subjects: {subjects}</p>
                    <p>Fees: BDT {wage}</p>
                </div>
            </div>
        </div>
    );
}