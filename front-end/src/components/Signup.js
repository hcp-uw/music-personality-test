import { useState, useEffect } from 'react'
import axios from 'axios'
import ErrorIcon from '@mui/icons-material/ErrorOutline';

export default function Signup(props) {
    // Keeps track of user input in each field
    const [formData, setFormData] = useState(
        {
            first: "",
            last: "",
            email: "",
            password: "",
            auth_key:"ABC"
        }
    )

    // State for checking to make sure that there is a proper email and long password
    const [isProperEmail, setProperEmail] = useState(false)
    const [isProperPassword, setProperPassword] = useState(false)
    const [showError, setShowError] = useState(false)

    // Updates state whenever email is changed
    useEffect(() => {
        console.log("entered")
        if (formData.email.length > 0
            && formData.email.indexOf('@') > 0
            && formData.email.slice(formData.email.indexOf('@')).length > 1) {
                setProperEmail(true)
            } else {
                setProperEmail(false)
            }
        }, [formData.email])

    // Updates state whenever password is changed
    useEffect(() => {
        if (formData.password.length >= 5) {
            setProperPassword(true)
        } else {
            setProperPassword(false)
        }
    }, [formData.password])


    // Updates state each time a user changes text in a field
    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value} = event.target
            return (
                {
                    ...prevFormData,
                    [name]: value
                }

            )
        })
    }

    // Sends data to backend as a JSON object and gathers the info that is returned
    function handleSubmit(event) {
        event.preventDefault()
        if (isProperEmail && isProperPassword) {
            setShowError(false);
            axios.get("http://67.168.214.36:5000/register", JSON.stringify(formData, null, 2))
            .then((res) => {
                console.log(res);
            })
        } else {
            setShowError(true)
        }
    }

    return(
        <div className="signup--background">
            <form className="signup--form" onSubmit={handleSubmit}>
                <h1 className="form--header">Create Account</h1>
                <label htmlFor="first" className="form--label">First Name</label>
                <input
                    type="text"
                    id="first"
                    name="first"
                    className="form--input"
                    value={formData.first}
                    onChange={handleChange}
                />
                <label htmlFor="last" className="form--label">Last Name</label>
                <input
                    type="text"
                    id="last"
                    name="last"
                    className="form--input"
                    value={formData.last}
                    onChange={handleChange}
                />
                <label htmlFor="email" className="form--label">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="form--input"
                    value={formData.email}
                    onChange={handleChange}
                />
                {
                    showError && !isProperEmail &&
                    <div className="form--error">
                        <ErrorIcon fontSize="small"/>
                        <p>
                            &nbsp;Please enter a valid email
                        </p>
                    </div>
                }
                <label htmlFor="password" className="form--label">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    className="form--input"
                    value={formData.password}
                    onChange={handleChange}
                />
                {
                    showError && !isProperPassword &&
                    <div className="form--error">
                        <ErrorIcon fontSize="small"/>
                        <p>
                            &nbsp;Minimum length should be 5 characters
                        </p>
                    </div>
                }
                <button className="form--button">Create Account</button>
                <div className="signup--links">
                    <p>Already a member?</p>
                    <p
                        className="form--link"
                        onClick={() => props.toggleLogin()}
                    >
                        Log in
                    </p>
                </div>
            </form>
        </div>
    )
}