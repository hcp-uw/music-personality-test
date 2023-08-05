import { useState } from 'react'
import axios from 'axios'

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
        <div className="signup--background">
            <form className="signup--form" onSubmit={handleSubmit}>
                <h1 className="form--header">Create Account</h1>
                <label htmlFor="first" className="form--label">First Name</label>
                <input 
                    type="text"
                    name="first"
                    className="form--input"
                    value={formData.first}
                    onChange={handleChange}
                />
                <label htmlFor="last" className="form--label">Last Name</label>
                <input 
                    type="text"
                    name="last"
                    className="form--input"
                    value={formData.last}
                    onChange={handleChange}
                />
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