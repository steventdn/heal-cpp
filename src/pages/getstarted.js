import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/getstarted.css'; 

function GetStarted(){


    return(
        <div>
          <h1>WELCOME TO HEAL!</h1>
            <div className='button-spacing'>
            <Link to="/login">
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
