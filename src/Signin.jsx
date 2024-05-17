import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { toast } from 'react-toastify';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission default behavior
        try {
            const result = await axios.post("http://localhost:3001/login", { email, password });
            console.log(result);
            if (result.data === 'login success') {
                // Login successful, show notification and navigate to the schedule page
                toast.success('You are successfully logged in!');
                navigate('/AdminChoice');
            } else if (result.data === 'the password is incorrect'|| result.data==='NO record existed') {
                // Set error message if password is incorrect
                toast.error('The email and/or password you specified are not correct.');
            }
            
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login');
        }
    }

    return (
        <div className='custom-signin-container'>
            <div className='custom-signin-box'>
                <h3 style={{ fontWeight: "normal" }}>Signin</h3>
                <form onSubmit={handleSubmit} action='Schedule.jsx'>
                    <div className='custom-input-container'>
                        <input style={{ width: "275px" }}  type='email' placeholder='Enter Email' autoComplete='off' name='email'
                            className='custom-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='custom-input-container'>
                        <input  style={{ width: "275px" }}  type='password' placeholder='Enter password' autoComplete='off' name='password'
                            className='custom-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='custom-button'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
