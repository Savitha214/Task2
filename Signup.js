import React, { useState } from 'react';
import './Signup.css';
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const navigate=useNavigate();
    const navigate2=useNavigate();
    const handlelogin=()=>
    {
        navigate("/Login")
    }
    const handlelogin2=()=>
    {
        navigate2("/Login")
    }
    
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        console.log('User Name:', userName);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="userName">User Name:</label>
                        <input
                            type="text"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
               <center>  <table><tr><td> <button type="submit" className="signup-button" onClick={handlelogin2}>Sign Up</button></td></tr></table></center>
                </form>
                <p className="login-prompt">
                    Already have an account? <span onClick={handlelogin}><a href="/login">Login</a></span>
                </p>
            </div>
        </div>
    );
};

export default Signup;