import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/getstarted.css'; 

function GetStarted(){


    return(
        <div className='default-background'>
            <div className='welcome-text'>
              <a href="/">WELCOME TO HEAL</a>
            </div>
            <div className='button-spacing'>
            <Link to="/registration">
              <button className="button">Get Started!</button>
            </Link>
            <Link to="/login">
              <button className="button">Login</button>
            </Link>
            </div>
        </div>
        );
}

export default GetStarted;
