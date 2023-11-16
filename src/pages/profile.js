import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css";

function Profile() {
  const location = useLocation();
  const userId = location.state ? location.state.id : null;
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user details based on userId
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <div className="homepage">
      <div className="navbar">
        <Link to="/home" state={{ id: userId }}>Home</Link>
        <Link to="/goals" state={{ id: userId }}>Goals</Link>
        <Link to="/leaderboard" state={{ id: userId }}>Leaderboard</Link>
        <Link to="/profile" state={{ id: userId }}>Profile</Link>
      </div>
      {userDetails && (
        <div>
          <h1>Hello {userDetails.firstName} {userDetails.lastName} and welcome to the Profile page</h1>
          <p>Email: {userDetails.email}</p>
          <p>Gender: {userDetails.selectedGender}</p>
          <p>Height: {userDetails.heightFt}'{userDetails.heightIn}"</p>
          <p>Weight: {userDetails.weight} lb.</p>
          <p>Birthday: {userDetails.birthday}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
