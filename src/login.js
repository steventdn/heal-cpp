import React, { useState } from 'react';
import './login.css'; // Import the CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // LOGIN LOGIC NEEDED TO BE ADDED HERE!!!
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="login-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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

          {/*INSERT REGISTER NOW LINK*/}
    </div>
  );
}

export default Login;
