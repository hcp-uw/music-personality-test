import { useState } from 'react'
import axios from 'axios';

export default function Login(props) {
    // Keeps track of user input in each field
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            auth_key:"ABC"
        }
    )

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
        axios.get("http://67.168.214.36:5000/login", JSON.stringify(formData, null, 2))
        .then((res) => {
            console.log(res);
        })
    }

    return(
        <div className="login--background">
            <form className="login--form" onSubmit={handleSubmit}>
                <h1 className="form--header">Welcome Back!</h1>
                <label htmlFor="email" className="form--label">Email</label>
                <input 
                    type="text"
                    name="email"
                    className="form--input"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password" className="form--label">Password</label>
                <input 
                    type="text"
                    name="password"
                    className="form--input"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button className="form--button">Sign In</button>
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
            </form>
        </div>
    )
}