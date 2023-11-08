import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Login from './pages/login.js';
import Registration from './pages/registration.js';
import GetStarted from './pages/getstarted.js';
import Home from './pages/home.js';
import Goals from './pages/goals';
import Leaderboard from './pages/leaderboard';
import Profile from './pages/profile';
import Questionaire from './pages/questionaire.js';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<GetStarted/>}></Route>
        <Route path = "/login" element={<Login/>}></Route>
        <Route path = "/registration" element={<Registration/>}></Route>
        <Route path = "/questionaire" element={<Questionaire/>}></Route>
        <Route path = "/home" element={<Home/>}></Route>
        <Route path = "/goals" element={<Goals/>}></Route>
        <Route path = "/leaderboard" element={<Leaderboard/>}></Route>
        <Route path = "/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;