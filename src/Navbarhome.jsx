import React from 'react';
import {Link} from 'react-router-dom';
import MVGRLogo from "./images/mvgr-logo.png";
import { useNavigate } from 'react-router-dom';

const Navbarhome = () => {
    const navigate =useNavigate();
    return ( 
        <div className='navbar'>
            <img src={MVGRLogo} alt="MVGR Logo"  />
            <ul>
                <li>
                <Link to='/Signin'>Signin</Link>
                </li>
                <li>
                <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbarhome;