import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'; 
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
  
    try {
      const res = await axios.post(`${apiUrl}login`, {
        email,
        password,
      });

      console.log('Response from server:', res);

      if (res.data.status === "exist" && res.data.userId) {
        // Use navigate instead of history
        history(`/home`, { state: { id: res.data.userId } });
      } else if (res.data.status === "notexist") {
        alert("User has not signed up");
      } else {
        // Handle other scenarios if needed
        alert("Unexpected response from server");
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Check if the error is due to network issues or server error
      if (error.response) {
        // Server responded with a non-2xx status
        alert(`Server error: ${error.response.data.error}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert('Network error. Please check your internet connection.');
      } else {
        // Something happened in setting up the request that triggered an error.
        alert('Unexpected error. Please try again.');
      }
    }
  }
  

  return (
    <div className="default-background">
      <div className='welcome-text'>
        <a href="/">HEAL</a>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form action="POST">
          <input
            type="email"
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
          <button className="login-button" onClick={submit}>
            Login
          </button>
        </form>
        
        <h5>Don't have an account?</h5>
        <Link to="/registration">
          <h5>Register Now</h5>
        </Link>
      </div>
    </div>
  );
}

export default Login;
