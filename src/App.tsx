import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Registretion from './pages/register/Registretion';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="">
      
      <BrowserRouter>
      <Routes>
        < Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='regi' element={<Registretion/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
