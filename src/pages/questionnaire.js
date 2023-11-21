import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/questionaire.css';
import axios from 'axios';

function Questionnaire() {
  const location = useLocation();
  const userId = location.state ? location.state.id : null;
  const [selectedGender, setSelectedGender] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weight, setWeight] = useState('');
  const [birthday, setBirthday] = useState('');
  const history = useNavigate();

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const submitQuestionnaire = async (e) => {
    e.preventDefault();

    try {
      // Send questionnaire data to the server
      const res = await axios.post('http://localhost:5000/questionnaire', {
        userId,
        selectedGender,
        heightFt,
        heightIn,
        weight,
        birthday,
      });

      // Handle the server response accordingly
      if (res.data === 'success') {
        // Redirect the user to the next page (modify as needed)
        alert('Questionnaire submitted successfully!');
        // useNavigate() can be used here to navigate to the next page
        history('/profile', { state: { id: userId } });
      } else {
        alert('Failed to submit questionnaire. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='default-background'>
      <div className='welcome-text'>
              <a href="/">HEAL</a>
      </div>
      <div className='question-container'>
        <h1>Almost there!</h1>
        <h4>We just want to know a little more about you!</h4>

        <div className='line'></div>

        <div>
          <label htmlFor='gender'>Gender</label>
          <select id='gender' name='gender' value={selectedGender} onChange={handleGenderChange}>
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>

        <h3>Height</h3>
        <div className='space-between'>
          <form>
            <input
              placeholder="'"
              className='input-box'
              value={heightFt}
              onChange={(e) => setHeightFt(e.target.value)}
            />
            <span> ft.</span>
          </form>

          <form>
            <input
              placeholder='"'
              className='input-box'
              value={heightIn}
              onChange={(e) => setHeightIn(e.target.value)}
            />
            <span> in.</span>
          </form>
        </div>

        <h3>Weight</h3>
        <div>
          <form>
            <input
              placeholder='lb'
              className='input-box'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <span> lb.</span>
          </form>
        </div>

        <h3>Date of Birth</h3>
        <div>
          <form>
            <input
              placeholder='00 / 00 / 0000'
              className='input-box-large'
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </form>
        </div>

        <div>
          <button className='submit-button' onClick={submitQuestionnaire}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
