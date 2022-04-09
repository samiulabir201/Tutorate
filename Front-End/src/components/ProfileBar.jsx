import React, {useState} from 'react';
import '../stylesheets/ProfileBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown } from 'react-bootstrap';
import { ProfileDialog } from './ProfileDialog';
import {TutorProfileForm} from "./TutorProfileForm";

export const ProfileBar = () => {
    const [profileDialogShow, setProfileDialogShow] = useState(false);
    const [user, setUser] = useState('');
    const [role, setRole] = useState(0);
    const [formShown, setFormShown] = useState(false);

    const logout = async () => {
        const res = await fetch(`http://localhost:8080/user/logout`, {
            method: 'GET',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        });
        setUser('');
    }

    if (user === '') {
        return (
            <div className="my-auto">
                <button
                    className="profileBar"
                    onClick={() => {setProfileDialogShow(true)}}>
                    <i className="icon bi bi-person-circle" />
                    Profile
                </button>
                <div>
                    <ProfileDialog
                        show={profileDialogShow}
                        updateUser={(newUser) => {setUser(newUser)}}
                        onHide={() => {setProfileDialogShow(false)}}
                    />
                </div>
            </div>
        );
    }
    else {
        return (
            <Dropdown className="my-auto profileOptions">
                <Dropdown.Toggle className="dropdown">
                    <button className="profileBar">
                        <i className="icon bi bi-person-circle" />
                        {user}
                    </button>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item
                        hidden={role !== 0}
                        className="dropdown-item"
                        onClick={() => {setFormShown(true)}}>
                        <i className="icon bi bi-box-arrow-left" />
                        Create Tutor Profile
                    </Dropdown.Item>
                    <TutorProfileForm show={formShown} onHide={() => setFormShown(false)}/>
                    <Dropdown.Item
                        hidden={role === 0}
                        className="dropdown-item"
                        onClick={() => {}}>
                        <i className="icon bi bi-box-arrow-left" />
                        View Tutor Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                        className="dropdown-item"
                        onClick={() => logout()}>
                        <i className="icon bi bi-box-arrow-left" />
                        Log out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
