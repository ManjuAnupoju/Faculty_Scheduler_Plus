import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Choice from './Choice';
import {Route, Routes} from 'react-router-dom';
import Signin from './Signin';
import Contact from './Contact';
import Facultysignin from './Facultysignin';
import Schedule from './Schedule';
import Retrieve from './Retrieve';
import AdminChoice from './AdminChoice';
import Publications_workshops from './Publications_workshops';
import Home from './Home.jsx';
import FacultyWorkloads from './FacultyWorkloads.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Home /> */}
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Choice' element={<Choice />}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Facultysignin' element={<Facultysignin/>}/>
          <Route path='/AdminChoice' element={<AdminChoice/>}/>   
          <Route path='/view-faculty' element={<FacultyWorkloads/>}/>
          <Route path='/Schedule' element={<Schedule/>}/>    
          <Route path='/Retrieve' element={<Retrieve/>}/>  
          <Route path='/Addcc' element={<Publications_workshops/>}/>  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

