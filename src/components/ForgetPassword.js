import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaUserPlus } from 'react-icons/fa';
import axios from 'axios';

function ForgetPassword()
{
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const forget_password = async () => {
        if(email === ''){
            alert('Please enter your email');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/forget_pass', {
                email: email
            });
            alert('Password reset link has been sent to your email');
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert('Failed to send password reset link');
        }
    }
    return (
        <div className="login-form">
              <h1>Forgot Password</h1>
              <div className="form-group">
                  <FaEnvelope className="input-icon"/>
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <button className="btn btn-primary" onClick={forget_password}>Send Reset Link</button>
              <p>Already have an account? <a href="/login">Login</a></p>
          </div>
       );
}


 



export default ForgetPassword;
