import icon from "../images/gramophone.png"
import iconText from "../images/MPTLogoText.png"
import "../App.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={icon} alt="logo" className="nav--logo" />
            <img src={iconText} alt="logoText" className="nav--logotext" />
        </nav>
    );
}