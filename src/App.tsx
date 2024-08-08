import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Registretion from './pages/register/Registretion';
import Profile from './pages/profile/Profile';
import Balance from './pages/dilogbox/Addbalance';
import Addexpence from './pages/dilogbox/Addexpence';
import Hishtry from './pages/hishtry/Hishtry';
import History1 from './pages/hishtry/History1';
import PageNotfound from './pages/errorpage/PageNotfound';


function App() {
  return (
    <div className="">
      
      <BrowserRouter>
      <Routes>
        < Route path='/' element={<Home/>}/>
        <Route path='*' element={<PageNotfound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='regi' element={<Registretion/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path='balance' element={<Balance/>}/>
        <Route path='expence' element={<Addexpence/>}/>
        {/* <Route path='history' element={<Hishtry/>}/> */}
        <Route path='history1' element={<History1/>}/>
      
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
