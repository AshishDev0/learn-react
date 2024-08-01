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
        <div className="flex justify-between items-center px-6 py-2 bg-cyan-50 shadow-md sticky top-0">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL} />
            </div>
            <ul className="flex items-center">
                <li className="mr-4">
                    Online Status : {status ? "🟢" : "🔴" }
                </li>
                <li className="mr-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="mr-4">
                    <Link to="/about">About us</Link>
                </li>
                <li className="mr-4">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="mr-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <button className="bg-black px-8 py-1 text-white rounded-sm" onClick={() => {
                    setLogIn(!logIn)
                }}>
                    {logIn ? 'LogOut' : 'LogIn'}
                </button>
            </ul>
        </div>
    )
};

export default Header;

