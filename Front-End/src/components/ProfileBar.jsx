import React, {useState} from 'react';
import '../stylesheets/ProfileBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown } from 'react-bootstrap';
import { ProfileDialog } from './ProfileDialog';
import {TutorProfileForm} from "./TutorProfileForm";
import {useStateContext} from "../contexts/StateContextProvider";

export const ProfileBar = () => {
    const [profileDialogShow, setProfileDialogShow] = useState(false);
    const {user, setUser} = useStateContext();
    const [formShown, setFormShown] = useState(false);

    const logout = async () => {
        await fetch(`http://localhost:8080/user/logout`, {
            method: 'GET',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        });
        setUser({});
        localStorage.removeItem('user');
    }

    if (user.username === undefined) {
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
                        {user.username}
                    </button>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item
                        hidden={user.role === 'tutor'}
                        className="dropdown-item"
                        onClick={() => {setFormShown(true)}}>
                        <i className="icon bi bi-box-arrow-left" />
                        Create Tutor Profile
                    </Dropdown.Item>
                    <TutorProfileForm show={formShown} onHide={() => setFormShown(false)}/>
                    <Dropdown.Item
                        hidden={user.role === 'user'}
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
