import React, { useState } from 'react';
import axios from 'axios'; 
import './Schedule.css'; // Import the external CSS file
import {toast} from 'react-toastify';
import Navbaradmin from './Navbaradmin';

const Schedule = () => {
    const [facultyName, setFacultyName] = useState('');
    const [weekName, setWeekName] = useState('');
    const [selectedHours, setSelectedHours] = useState('');
    const [workload, setWorkload] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any submission logic here
        axios.post("http://localhost:3001/facultyschedule", {
            facultyName,
            weekName, // Update field name to match schema
            selectedHours, // Update field name to match schema
            workload // Update field name to match schema
        })
        .then(result => {
            console.log(result);
            toast.success('Schedule successfully added!');
        })
        .catch(err => console.log(err))
    };
    

    return (
    <div>
        <Navbaradmin/>
            <div className="container">
            <h2 style={{ fontWeight: "normal" }}>Add Schedule</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="facultyName">Faculty Name</label>
                    <input type="text" id="facultyName" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="weekName">Week Name</label>
                    <select id="weekName" value={weekName} onChange={(e) => setWeekName(e.target.value)}>
                        <option>Select Week</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="selectedHours">Select Hours</label>
                    <select id="selectedHours" value={selectedHours} onChange={(e) => setSelectedHours(e.target.value)}>
                        <option>Select Hours</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="workload">Workload</label>
                    <input type="text" id="workload" value={workload} onChange={(e) => setWorkload(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
        
    );
}

export default Schedule;
