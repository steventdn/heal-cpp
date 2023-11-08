import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/questionaire.css'; 
import axios from 'axios';


function Questionaire() {

    const [selectedGender, setSelectedGender] = useState(''); // State to track the selected gender
    const [heightft, setHeightFt] = useState('');
    const [heightin, setHeightIn] = useState('');
    const [weight, setWeight] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleGenderChange = (event) => {
      setSelectedGender(event.target.value); // Update the selected gender when an option is chosen
    };

   
  
    return (
        <div className='default-background'>
          <div className='question-container'>
            <h1>Almost there!</h1>
            <h4>We just want to know a little more about you!</h4>

            <div className='line'></div>

            <div>
              <label htmlFor="gender">Select Gender:</label>
              <select id="gender" name="gender" value={selectedGender} onChange={handleGenderChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <h3>Height:</h3>
            <div className='space-between'>
              <form action = "POST">
                <input
                  placeholder="'"
                  className="input-box"
                  value={heightft}
                  onChange={(e) => setHeightFt(e.target.value)}
                />
                <span> ft.</span>
              </form>
              
              <form action = "POST">
                <input
                  placeholder='"'
                  className="input-box"
                  value={heightin}
                  onChange={(e) => setHeightIn(e.target.value)}
                />
                <span> in.</span>
              </form>
            </div>

            <h3>Weight:</h3>
            <div>
              <form action = "POST">
                  <input
                    placeholder="lb"
                    className="input-box"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <span> lb.</span>
                </form>
            </div>

            
            <h3>Date of Birth:</h3>
            <div>
              <form action = "POST">
                  <input
                    placeholder="00 / 00 / 0000"
                    className="input-box-large"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
              </form>
            </div>

            <div>
              <button className="submit-button">
                Submit
              </button>
            </div>

          </div>
        </div>
    
  );
}

export default Questionaire;
