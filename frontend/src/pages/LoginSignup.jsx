import { useState } from "react"
import "./css/LoginSignup.css"
import { Login, Signup } from "../api"

const initialState = {
    username: "",
    email: "",
    password: ""
}

export default function LoginSignup() {
    const [auth, setAuth] = useState('Sign Up')
    const [formData, setFormData] = useState(initialState)

    function handleOnChange(e) {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    async function handleSubmit() {
        let resData;

        if(auth === 'Sign Up') {
            resData = await Signup(formData)
        } else {
            resData = await Login({email: formData.email, password: formData.password})
        }

        console.log(resData)
        
        if(resData.success) {
            localStorage.setItem("auth-token", resData.token)
            window.location.replace("/")
        } else {
            alert(resData.errors)
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{auth}</h1>
                <div className="loginsignup-fields">
                    {auth === 'Sign Up' && 
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Your Name" 
                            value={formData.username}
                            onChange={handleOnChange}
                        />
                    }
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleOnChange}    
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleOnChange}      
                    />
                </div>
                <button onClick={handleSubmit}>Continue</button>
                {auth === 'Sign Up' ? (
                    <p className="loginsignup-login">Already have an account? <span onClick={() => setAuth('Login')} style={{cursor: "pointer"}}>Login here</span></p>
                ) : (
                    <p className="loginsignup-login">New User? <span onClick={() => setAuth('Sign Up')} style={{cursor: "pointer"}}>Sign Up</span></p>
                )}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
