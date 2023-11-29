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
  
      if (res.data.status === "exist" && res.data.userId) {
        // Use navigate instead of history
        history(`/home`, { state: { id: res.data.userId } });
      } else if (res.data.status === "notexist") {
        alert("User has not signed up");
      }
    } catch (e) {
      alert("Wrong details or something went wrong");
      console.log(e);
    }
  }
  

  return (
    <div className="default-background">
      <div className='welcome-text'>
              <a href="/">HEAL</a>
      </div>
    <div className="login-container">
      <h2>Login</h2>
      <form action = "POST">
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
      <Link to="/registration">  {/* Use React Router's Link component */}
          <h5>Register Now</h5>
        </Link>
    </div>
    </div>
  );
}

export default Login;
