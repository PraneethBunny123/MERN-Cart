import { useState } from "react"
import "./css/LoginSignup.css"

export default function LoginSignup() {
    const [auth, setAuth] = useState('Sign Up')

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{auth}</h1>
                <div className="loginsignup-fields">
                    {auth === 'Sign Up' && <input type="text" placeholder="Your Name"/>}
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
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
