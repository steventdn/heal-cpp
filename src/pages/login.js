import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'; 
import axios from 'axios';


function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:5000/login",{
          email, password
        })
        .then(res=>{
          if(res.data==="exist"){
              history("/home",{state: {id:email}})
          }else if(res.data==="notexist"){
              alert("User has not signed up")
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
  );
}

export default Login;
