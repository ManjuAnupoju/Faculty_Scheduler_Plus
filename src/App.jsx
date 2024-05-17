import React from 'react';
import './App.css'
import Navbarhome from './Navbarhome';
{/*import Choice from './Choice';
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Signin from './Signin';
import Contact from './Contact';
import Facultysignin from './Facultysignin';
import Schedule from './Schedule';
import Retrieve from './Retrieve';
import AdminChoice from './AdminChoice';
import Publications_workshops from './Publications_workshops';*/}
// import Home from './Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoutButton from './LogoutButton';


function App() {

  return (
    <div>
      <ToastContainer/>
      {/* <Home/> */}
      <LogoutButton/>
    </div>
  );
}

export default App;
