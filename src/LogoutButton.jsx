import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate= useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div onClick={handleLogout} style={{color:'white'}}>
            Logout
        </div>
    );
};

export default LogoutButton;
