// registration.css
/* Add the CSS styles as previously provided */

// Registration.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registration.css'; // Import the CSS file
import axios from 'axios';

function Registration() {
  const history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  
  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:5000/registration",{
          email, password
        })
        .then(res=>{
          if(res.data==="exist"){
              alert("User already exists")
          }else if(res.data==="notexist"){
              history("/home", {state:{id:email}})
        }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e);
        })

    }
    catch(e){
        console.log(e)
    }
  }
  return (
    <div className='registration-container'>
      <h2>Register Now!</h2>
      <form>
        <div className="name-inputs">
          <input
            type="text"
            placeholder="First Name"
            className="register-input-small"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="register-input-small"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="register-input"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
      <button className="register-button" onClick={submit}>
        Register
      </button>
      </form>
      <h5>Already have an account?</h5>
      <Link to="/login">  {/* Use React Router's Link component */}
          <h5>Login</h5>
        </Link>
    </div>
  );
}

export default Registration;
