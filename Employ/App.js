import React from 'react';
import Home from '../Employ/Home';
import Register from '../Employ/Register';
import Registerd from '../Employ/Registerd'
import Login from '../Employ/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './List';
import Adminlogin from './Adminlogin';
import Profile from './Profile';
function App() {
  return (
    <BrowserRouter>
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/Registerd" element={<Registerd/>}/>
        </Routes>
      </div>
     
    </BrowserRouter>
  );
}

export default App;

   