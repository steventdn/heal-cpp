// registration.css
/* Add the CSS styles as previously provided */

// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/registration.css'; // Import the CSS file

function Registration() {

  // use states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  return (
    <div className='registration-container'>
      <h2>Register Now!</h2>
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
        type="text"
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
      <button className="register-button">Register</button>
      <h5>Already have an account?</h5>
      <Link to="/login">  {/* Use React Router's Link component */}
          <h6>Login</h6>
        </Link>
    </div>
  );
}

export default Registration;
