import React, { useState, useEffect } from 'react';
import './FacultyWorkloads.css'; // Corrected import for the CSS file
import Navbaradmin from './Navbaradmin';

const FacultyWorkloads = () => {
    const [facultyName, setFacultyName] = useState('');
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3001/viewtimetable?facultyName=${facultyName}`);
            const data = await response.json();
            console.log('records fetched are:', data);
            setDocuments(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setError('Error fetching data. Please try again later.');
        }
        setLoading(false);
    };

    // Function to group the documents by week name
    const groupByWeekName = () => {
        const grouped = {};
        documents.forEach(doc => {
            if (!grouped[doc.weekName]) {
                grouped[doc.weekName] = [];
            }
            grouped[doc.weekName].push(doc);
        });
        return grouped;
    };

    return (
        <div>
            <Navbaradmin/>
            <br/>
            <h2 style={{ fontWeight: "normal" }}>View Faculty Workloads</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label style={{ fontWeight: "normal" }}>
                Enter Faculty Name:
                <input
                    type="text"
                    value={facultyName}
                    onChange={(e) => setFacultyName(e.target.value)}
                    className="input-field"
                    style={{ width: "200px" }} // Adjust the width value as needed
                />
            </label>

            <button type="submit" className="submit-button">Submit</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && documents.length === 0 && <p>Faculty not found</p>}
            {!loading && documents.length > 0 && (
                <div>
                    <p>Timetable of Faculty</p>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Week Name</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(groupByWeekName()).map(([weekName, docs]) => (
                                <tr key={weekName}>
                                    <td>{weekName}</td>
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <td key={num}>
                                            {docs.find(doc => doc.selectedHours.includes(num.toString()))?.workload || ''}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default FacultyWorkloads;
