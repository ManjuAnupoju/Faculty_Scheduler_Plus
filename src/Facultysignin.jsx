import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission default behavior
        axios.post("http://localhost:3001/facultylogin", { email, password })
            .then(result => {
                console.log(result);
                if (result.data === 'login success') {
                    // Login successful, navigate to the schedule page
                    navigate('/Addcc');
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='custom-signin-container'>
            <div className='custom-signin-box'>
                <h2>Signin</h2>
                <form onSubmit={handleSubmit} action='Schedule.jsx'>
                    <div className='custom-input-container'>
                        <label htmlFor='email'><strong><h1>Email</h1></strong></label>
                        <input type='email' placeholder='Enter Email' autoComplete='off' name='email'
                            className='custom-input' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='custom-input-container'>
                        <label htmlFor='email'><strong><h1>Password</h1></strong></label>
                        <input type='password' placeholder='Enter password' autoComplete='off' name='password'
                            className='custom-input' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='custom-button'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
