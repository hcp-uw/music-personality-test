import icon from "../images/MPTTextLogo.png"
import "../App.css";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <img src={icon} alt="logo" className="nav--logo" />
            <div className="nav--tabs">
                <p onClick={() => {window.location.href = "/"}}>Home Page</p>
                <p>About Personality Types</p>
                <p onClick={() => {window.location.href = "/#/questions"}}>Personality Test</p>
            </div>
            <button onClick={() => props.toggleLogin()}>Login</button>
        </nav>
    );
}