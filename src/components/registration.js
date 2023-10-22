import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Registration(){

          // use states
          const[firstName, setfirstName] = useState('');
          const[lastName, setLastName] = useState('');
          const[email, setEmail] = useState('');
          const[password, setPassword] = useState('');

          return(
                    <div className="login-container">
                    <h2>Welcome to HEAL</h2>
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="login-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="login-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-button">
                      Login
                    </button>
                    <h5>Don't have an account?</h5>
                      <Link to="/registration">  {/* Use React Router's Link component */}
                        <h6>Register Now</h6>
                      </Link>
                  </div>
          );


}
export default Registration;