import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/registration.css'; // Import the CSS file

function Registration(){

          // use states
          const[firstName, setfirstName] = useState('');
          const[lastName, setLastName] = useState('');
          const[email, setEmail] = useState('');
          const[password, setPassword] = useState('');

          return(
            <div>
              <h2>hello</h2>
            </div>
          );


}
export default Registration;