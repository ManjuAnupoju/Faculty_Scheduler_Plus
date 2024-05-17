import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.css';

const Choice = () => {
    return (
        <div className='container'>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center' }}>Login as</h1>

                    <Link to="/Facultysignin" className="button">Faculty</Link><br/>
                    <Link to="/Signin" className="button">Admin</Link>

        </div>
    );
}

export default Choice;


