import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/getstarted.css'; 

function GetStarted(){

    
    return(
        <div className='default-background'>
            <div className='welcome-text'>
              <a href="/">HEAL</a>
            </div>
            <div className='big-text'>THE BEST HEALTH AND FITNESS TRACKER</div>
            <div className='small-text'>POWERED BY AI TECHNOLOGY</div>
            <Link to="/registration">
              <button className="button">Register</button>
            </Link>
            <Link to="/login">
              <button className="button">Login</button>
            </Link>
        </div>
        );
}

export default GetStarted;
