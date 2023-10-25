import { GetUser } from "./../../backend/api/database";
import {useState, useEffect } from "react";


import tempImg from "../../images/planets/ELNC.svg";
import  { useAuth } from "./../../context/AuthContext"

export default function Results() {

    const [userInfo, setUserInfo] = useState(null);
    const { signIn, currentUser, signOut } = useAuth();
    const handleGetUser = async () => {
        try {
        const user = await GetUser("temp");

        setUserInfo(user);
        } catch (err) {
        console.error(err);
        }

    }

    const DEBUG = () => {
        console.log("HERE");
    }

    const handleClick = () => {
        window.location.href = "/"
    }

    useEffect(() => {
        handleGetUser();
      }, []);
    const img_src = "FLTC"
    return (
        // <div className="results--div">
        //     <h1>{userInfo}</h1>
        // </div>

        // <div id="result-container">
        //     <div id="top-elements">
        //         <div id="img-container">
        //             <div id="background">
        //                 <img src={tempImg} id="result-img" alt="Personality Planet"></img>
        //             </div>
        //             <div id="img-container-text">
        //                 <h2>Your Results:</h2>
        //                 <p>Test Text</p>
        //                 </div>
        //         </div>
        //         <div id="text-container">
        //             <h2>What your music personality tells you:</h2>
        //             <div id="about-text">
        //                 <p>EYou are one who prefers listening to X <br></br>type of music rather than other types such as Y and Z types. </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div id="bottom-elements">
        //         <div id="again-button">
        //             <button>Take another test here!</button>
        //         </div>
        //     </div>
        // </div>



        <div id="test">
            <p id="result-p">Your personality type is:</p>
            <h3 id="result-h3">Consul</h3>
            <h4 id="result-h4">ESTJ</h4>
            <img src={require(`./../../images/planets/${img_src}.svg`)} alt="fd"></img>
            <p id="result-p">Consuls are very caring, social, community-minded people who are always eager to help.</p>
            {!currentUser ? (
                <p id="login-check">Log in now to save your results!</p>
            ): (
                <div></div>
            )}
            <hr/>
            <div id="button-container">
                <button id="result-button" onClick={handleClick}>Finish</button>
            </div>

        </div>
        //     <div id="top-elements">
        //         <div id="img-container">
        //             <div id="background">
        //                 <img src={tempImg} id="result-img" alt="Personality Planet"></img>
        //             </div>
        //             <div id="img-container-text">
        //                 <h2>Your Results:</h2>
        //                 <p>Test Text</p>
        //                 </div>
        //         </div>
        //         <div id="text-container">
        //             <h2>What your music personality tells you:</h2>
        //             <div id="about-text">
        //                 <p>EYou are one who prefers listening to X <br></br>type of music rather than other types such as Y and Z types. </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div id="bottom-elements">
        //         <div id="again-button">
        //             <button>Take another test here!</button>
        //         </div>
        //     </div>
        // </div>
    )
}