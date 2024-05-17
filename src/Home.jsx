import React from 'react';
import Navbarhome from './Navbarhome';
import Mvgrbgi from './images/lib.jpg';
import './Home.css';
import Signin from "./Signin.jsx";
import homeBg from "./images/R.jpg"
const Home = () => {
    
    return (  
        <div className=''>
            <img className='home-image' src={homeBg} />
            <div className='bg-home'>
            <Navbarhome />
                <h1 style={{ fontWeight: "normal" }}>Welcome to MVGR Faculty Scheduler.</h1>
            </div>
        </div>
    );
}

export default Home;