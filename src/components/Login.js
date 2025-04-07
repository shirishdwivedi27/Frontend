import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import '../styles/Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const go_signup= async()=>{
        navigate('/signup');
    };
 
    const check_login = async () => {
        try {
            const response = await axios.post("https://flask-api-s.onrender.com/login",{username,password});
            if(response.data.message === "Login successful") {
                navigate('Dashboard');
                if(response.data.count < 1) {
                    alert("Welcome to Dashboard");
                }
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage(error.message);
        }
    };
   


    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="hms-heading">HMS</h1>
                <p className="hms-subtext">Hostel Management System</p>
                <h2 className="login-title">
                    <FaSignInAlt style={{ marginRight: '10px' }} />
                    Welcome Back
                </h2>
                <div className="input-group">
                    <input 
                        className="input-field"
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ paddingLeft: '45px' }}
                    />
                    <FaUser style={{ 
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#3949ab'
                    }} />
                </div>
                <div className="input-group">
                    <input 
                        className="input-field"
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ paddingLeft: '45px' }}
                    />
                    <FaLock style={{ 
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#3949ab'
                    }} />
                </div>
                
                <button className="login-btn" onClick={check_login}>
                    Login
                </button>

                {message && <p className="error-message">{message}</p>}
                
                <button className="forgot-password" onClick={() => navigate('/forget_pass')}>Forgot Password?</button>
                   
                {/* <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div> */}

                <div className="signup-link">
                    <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
                </div>
            </div>
        </div>
    );
}

export default Login;