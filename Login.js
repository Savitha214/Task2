import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const handlehome=()=>
    {
        navigate("/Home")
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
       
        <div className="login-container">
            <center>
            <div className="login-form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
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
              <center> <table><tr> <td>   <button type="submit" className="login-button" onClick={handlehome}>Login</button></td></tr></table></center>
                </form>
            </div>
            </center>
        </div>
    );
};

export default Login;