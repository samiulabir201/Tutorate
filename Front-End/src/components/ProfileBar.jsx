import React, {useState} from 'react';
import '../stylesheets/ProfileBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown } from 'react-bootstrap';
import { ProfileDialog } from './ProfileDialog';

export const ProfileBar = () => {
    const [profileDialogShow, setProfileDialogShow] = useState(false);
    const [user, setUser] = useState('');

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
                        className="dropdown-item"
                        onClick={() => setUser('')}>
                        <i className="icon bi bi-box-arrow-left" />
                        Log out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
