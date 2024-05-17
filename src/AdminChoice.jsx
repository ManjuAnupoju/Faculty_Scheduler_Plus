// AdminChoice.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminChoice.css';
import addfac from "./images/addicon.jpg";
import updfac from "./images/update_fac.jpg";
import delfac from "./images/delete_fac.jpeg";
import schedule from "./images/schedule.png";
import freetime from "./images/retrieve.png";
import Navbaradmin from './Navbaradmin';
import { useNavigate } from 'react-router-dom';
const AdminChoice = () => {
    const handleLogout = () => {
        // Add your logout logic here
        // For example, you can clear the local storage or remove a token
        const navigate = useNavigate();
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className="faculty-options-container">
            <Navbaradmin/>
            <h1 className="faculty-options-title">FacultyHub</h1>
            <div className="options-container">
<div className="option view-faculty-option">
    <Link to='/view-faculty' className="option-link">
        <span className="option-icon">
            <i className="fas fa-user-edit"></i>
        </span>
        <span className="option-text">Faculty workloads</span>
        <img className='icon_img' src={updfac} />
    </Link>
</div>

<div className="option retrieve-free-hours-option">
    <Link to='/Retrieve' className="option-link">
        <span className="option-icon">
            <i className="fas fa-clock"></i>
        </span>
        <span className="option-text">Retrieve Free Hours</span>
        <img className='icon_img' src={freetime} />
    </Link>
</div>

<div className="option schedule-option">
    <Link to='/Schedule' className="option-link">
        <span className="option-icon">
            <i className="fas fa-calendar-alt"></i>
        </span>
        <span className="option-text">Insert Schedule</span>
        <img className='icon_img' src={schedule} />
    </Link>
</div>
<div className="option add-faculty-option">
    <Link to='/add-faculty' className="option-link">
        <span className="option-icon">
            <i className="fas fa-user-plus"></i>
        </span>
        <span className="option-text">Add Faculty</span>
        
    </Link>
    <img className='icon_img' src={addfac}/>
</div>

<div className="option delete-faculty-option">
    <Link to='/delete-faculty' className="option-link">
        <span className="option-icon">
            <i className="fas fa-user-times"></i>
        </span>
        <span className="option-text">Delete Faculty</span>
        <img className='icon_img' src={delfac} />
    </Link>
</div>
{/*<button className='btn btn-primary' onClick={handleLogout}>Logout</button>*/}

            </div>
        </div>
    );
}

export default AdminChoice;