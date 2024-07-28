import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [logIn, setLogIn] = useState(false);

    useEffect(() => {
        // console.log('Header use effect called')
    }, [logIn])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <ul className="nav">
                <li className="link">
                    <Link to="/">Home</Link>

                    {/* never use anchor  */}
                    {/* <a href="/home">Home</a>  */}
                </li>
                <li className="link">
                    <Link to="/about">About us</Link>
                </li>
                <li className="link">
                    <Link to="/contact">Contact us</Link>
                </li>
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

