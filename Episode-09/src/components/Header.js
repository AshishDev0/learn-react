import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnelineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [logIn, setLogIn] = useState(false);
    
    // console.log('Header render')
    
    const status = useOnelineStatus();

    useEffect(() => {
        // console.log('Header useEffect')
    }, [logIn])

    // console.log('Header render2')

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <ul className="nav">
                <li className="link">
                    Online Status : {status ? "🟢" : "🔴" }
                </li>
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/about">About us</Link>
                </li>
                <li className="link">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="link">
                    <Link to="/grocery">Grocery</Link>
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

