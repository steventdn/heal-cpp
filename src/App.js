import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './pages/login.js';
import Registration from './pages/registration.js';
import GetStarted from './pages/getstarted.js';
import Home from './pages/home.js';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<GetStarted/>}></Route>
        <Route path = "/login" element={<Login/>}></Route>
        <Route path = "/home" element={<Home/>}></Route>
        <Route path = "/registration" element={<Registration/>}></Route>
      </Routes>
    </div>
  );
}

export default App;