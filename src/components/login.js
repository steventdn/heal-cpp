import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Import the CSS file


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // LOGIN LOGIC NEEDED TO BE ADDED HERE!!!
  const handleLogin = () => {

    //add login logic

    //clear input fields
    /*  if username already exists:
            setPassword('');
        else:
            setUsername('');
            setPassword('');
    */
    setUsername('');
    setPassword('');
  };

  return (
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
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <h5>Don't have an account?</h5>
        <Link to="/registration">  {/* Use React Router's Link component */}
          <h6>Register Now</h6>
        </Link>
    </div>
  );
}

export default Login;
