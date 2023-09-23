import icon from "../images/MPTTextLogo.png"
import "../App.css";
import GoogleButton from 'react-google-button'
import  { useAuth } from "../context/AuthContext"
import { auth } from "../config/firebase"

export default function Navbar(props) {

    const { signIn, currentUser, signOut } = useAuth();

    const handleSignIn = async () => {
        try {
            const result = await signIn();
            console.log(currentUser);
            //props.onSignInSuccess(result);
            //console.log(result);
        } catch (err) {
            console.error(err);
        }
    }

    const handleSignOut = async () => {
        try {
            console.log(currentUser);
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDebug = async () => {
        console.log(currentUser);
    }

    return (
        <nav className="navbar">
            <img src={icon} alt="logo" className="nav--logo" />
            <div className="nav--tabs">
                <p onClick={() => {window.location.href = "/"}}>Home Page</p>
                <p onClick={handleDebug}>About Personality Types</p>
                <p onClick={() => {window.location.href = "/questions"}}>Personality Test</p>
                {currentUser ? (
                    <p onClick={() => {window.location.href = "/info"}}>My Personality</p>
                ) : (<></>)}
            </div>

            {currentUser ? (
                <div style={{display: "flex", alignItems: "center"}}>

                    <p><strong>Welcome&nbsp;</strong> </p> <p style={{padding: "10px", color: "white"}}> {currentUser.displayName}</p>

                    <span>
                        <img src={currentUser.photoURL} alt={"user id"}></img>
                    </span>
                    <span>
                        <button onClick={handleSignOut}>Logout</button>
                    </span>
                </div>
            ) : (
                <div>
                    <button onClick={handleSignIn}>Login</button>
                </div>
            )}
        </nav>
    );
}