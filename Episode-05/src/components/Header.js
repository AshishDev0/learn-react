import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={ LOGO_URL } />
        </div>
        <ul className="nav">
            <li className="link">Home</li>
            <li className="link">About us</li>
            <li className="link">Contact us</li>
            <li className="link">Cart</li>
        </ul>
    </div>
);

export default Header;

