import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css";

function Leaderboard() {
    const location = useLocation();
    const userId = location.state ? location.state.id : null;
    const [userName, setUserName] = useState("");

    useEffect(() => {
        // Fetch user details based on userId
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/user/${userId}`);
            const { firstName, lastName } = response.data;
            setUserName(`${firstName} ${lastName}`);
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
            <h1>Hello {userName} and welcome to the Leaderboard page</h1>
        </div>
    );
}

export default Leaderboard;
