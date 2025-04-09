import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaUserPlus } from 'react-icons/fa';
import axios from 'axios';
import '../styles/Signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords don't match!");
            return;
        }
        try {
            const response = await axios.post('https://flask-api-s.onrender.com/signup', formData);
            if (response.data.message === "Signup successful") {
                navigate('/login');
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1 className="hms-heading">HMS</h1>
                <p className="hms-subtext">Hostel Management System</p>
                <h2 className="signup-title">
                    <FaUserPlus className="title-icon" />
                    Create Accounts
                </h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="input-group">
                        <input
                            type="text"
                            name="username"
                            className="input-field"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <FaUser className="input-icon" />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            className="input-field"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <FaEnvelope className="input-icon" />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="input-group">
                        <input
                            type="tel"
                            name="phone"
                            className="input-field"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <FaPhone className="input-icon" />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <FaLock className="input-icon" />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            className="input-field"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <FaLock className="input-icon" />
                        <div className="input-highlight"></div>
                    </div>

                    {message && <div className="error-message">{message}</div>}

                    <button type="submit" className="signup-btn">
                        Sign Up
                        <div className="btn-shine"></div>
                    </button>

                    <div className="login-link">
                        Already have an account? 
                        <span onClick={() => navigate('/login')}> Login here</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;