import React, {useState} from "react";
import ReactModal from "react-modal";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../stylesheets/ProfileDialog.css";
import md5 from "md5";

export const ProfileDialog = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showLogin, setShowLogin] = useState(true);

    const login = async () => {
        const res = await fetch(`http://localhost:8080/user/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user:user, password:password}),
        });
        props.updateUser(user);
        props.onHide();
        // TODO - check for invalid login details
    }

    const register = () => {

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserError('');
        setPasswordError('');
        if (user === "") {
            setUserError("Please enter a username.");
            return;
        }
        if (password === "") {
            setPasswordError("Please enter a password." );
            return;
        }

        if (showLogin) login();
        else register();
    };

    const handleDialogSwitch = () => {
        setUserError('');
        setPasswordError('');
        setShowLogin(!showLogin);
    }

    return (
        <ReactModal
            isOpen={props.show}
            onRequestClose={() => props.onHide()}
            className="profileModal"
            overlayClassName="profileOverlay"
        >
            <div class="profileDialogContainer">
                <h1 class="appTitle">Tutorate</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label className="profileFormLabel">
                        Username
                        <input
                            className="inputProfileInfo"
                            name="email"
                            type="text"
                            onChange={(event) => setUser(event.target.value)}
                        />
                        <p className="error">{userError}</p>
                    </label>
                    <label class="profileFormLabel">
                        Password
                        <input
                            class="inputProfileInfo"
                            name="password"
                            type="password"
                            autoComplete="off"
                            onChange={(event) => setPassword(md5(event.target.value))}
                        />
                        <p class="error">{passwordError}</p>
                    </label>
                    <input
                        type="submit"
                        onSubmit={(event) => handleSubmit(event)}
                        id="profileFormSubmit"
                        hidden
                    />
                </form>
                <label class="submitButton" for="profileFormSubmit">
                    {showLogin ? "Log In" : "Sign Up"}
                </label>
                <div class="dialogSwitchButtonContainer">
                    <h5 class="promptText">{showLogin ? "Don't have an account?" : "Have an account?"}</h5>
                    &nbsp;
                    &nbsp;
                    <button
                        class="dialogSwitchButton"
                        onClick={() => handleDialogSwitch()}
                    >
                        {showLogin ? "Sign up" : "Log in"}
                    </button>
                </div>
            </div>
        </ReactModal>
    );
}