import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [logIn, setLogIn] = useState(false);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <ul className="nav">
                <li className="link">Home</li>
                <li className="link">About us</li>
                <li className="link">Contact us</li>
                <li className="link">Cart</li>
                <button className="link btn-login" onClick={() => {
                    setLogIn(!logIn)
                }}>
                    {logIn ? 'LogOut' : 'LogIn'}
                </button>
            </ul>
        </div>
    )
};

export default Header;

