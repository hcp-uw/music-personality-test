import { useState, useEffect } from 'react'
import axios from 'axios';
import ErrorIcon from '@mui/icons-material/ErrorOutline';

import GoogleButton from 'react-google-button'
import { useAuth } from '../context/AuthContext';
//import { useAuth } from "../context/AuthContext"

export default function Login(props) {

    //Auth Things

    const { signIn } = useAuth();

    // Keeps track of user input in each field
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            auth_key:"ABC"
        }
    )

    // // State for checking to make sure that there is a proper email and long password
    // const [isProperEmail, setProperEmail] = useState(false)
    // const [isProperPassword, setProperPassword] = useState(false)
    // const [showError, setShowError] = useState(false)

    // // Updates state whenever email is changed
    // useEffect(() => {
    //     console.log("entered")
    //     if (formData.email.length > 0
    //         && formData.email.indexOf('@') > 0
    //         && formData.email.slice(formData.email.indexOf('@')).length > 1) {
    //             setProperEmail(true)
    //         } else {
    //             setProperEmail(false)
    //         }
    //     }, [formData.email])

    // // Updates state whenever password is changed
    // useEffect(() => {
    //     if (formData.password.length >= 5) {
    //         setProperPassword(true)
    //     } else {
    //         setProperPassword(false)
    //     }
    // }, [formData.password])

    // // Updates state each time a user changes text in a field
    // function handleChange(event) {
    //     setFormData(prevFormData => {
    //         const {name, value} = event.target
    //         return (
    //             {
    //                 ...prevFormData,
    //                 [name]: value
    //             }

    //         )
    //     })
    // }

    // Sends data to backend as a JSON object and gathers the info that is returned
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     if (isProperEmail && isProperPassword) {
    //         setShowError(false);
    //         console.log(formData);
    //         axios.post("http://67.168.214.36:5000/login", JSON.stringify(formData, null, 2))
    //         //axios.post("http://67.168.214.36:5000/login", formData)
    //             .then((res) => {
    //                 console.log(res);
    //         })
    //     } else {
    //         setShowError(true)
    //     }
    // }

    const handleSignIn = async () => {
        try {
            const result = await signIn();
            props.onSignInSuccess(result);
        } catch (err) {
            console.error(err);
        }
    }
    return(

        <div className="login--background">
            <div className="login--form">
                <h1 className="form--header">Welcome Back !</h1>

                <GoogleButton className='center' onClick={handleSignIn}></GoogleButton>


                <div className="login--links">
                    <p
                        onClick={() => {
                            props.toggleLogin()
                            window.location.href = './signup'
                        }}
                        className="form--link"
                    >
                        Sign up here!
                    </p>
                    <p className="form--link">Forgot Password?</p>
                </div>
            </div>
        </div>
    )
}