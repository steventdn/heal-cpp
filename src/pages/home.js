import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css";
import "../globals.css"

const apiUrl = process.env.REACT_APP_API_URL;

function Home() {
    const location = useLocation();
    const userId = location.state ? location.state.id : null;
    const [userName, setUserName] = useState("");
    
    useEffect(() => {
        // Fetch user details based on userId
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`${apiUrl}user/${userId}`);
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
        <div className="default-background">
            <div className="navbar">
                <Link to="/home" state={{ id: userId }}>HOME</Link>
                <Link to="/goals" state={{ id: userId }}>GOALS</Link>
                <Link to="/profile" state={{ id: userId }}>PROFILE</Link>
                <Link to="/getstarted">SIGNOUT</Link>
            </div>
            <h1>Hello {userName} and welcome to the Home page</h1>
        </div>
    );
}

export default Home;
