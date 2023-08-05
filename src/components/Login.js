import { useState } from 'react'

export default function Login(props) {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
        }
    )

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

    return(
        <div className="login--background">
            <form className="login--form">
                <h1>Welcome Back!</h1>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button>Sign in</button>
                <div className="login--links">
                    <div classname="signup--link">
                        <p>Sign up here!</p>
                    </div>
                    <div classname="password--link">
                        <p>Forgot Password?</p>
                    </div>
                </div>
            </form>
        </div>
    )
}