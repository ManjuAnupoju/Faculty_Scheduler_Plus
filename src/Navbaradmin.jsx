// Navbaradmin.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbaradmin.css'; // Import external CSS file
import LogoutButton from './LogoutButton';

const Navbaradmin = () => {
    return (
        <nav className="navbar-admin">
            <Link className='forHome' to='/AdminChoice'>Home</Link>
            <ul className="navbar-list">
                {/* Add a separator */}
                <li>
                    {/*<Link to='/'>Logout</Link>*/}
                    <LogoutButton/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbaradmin;
