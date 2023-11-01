import React from "react";
import { useLocation, useNavigate } from "react-router";
import '../styles/navbar.css';


function Profile(){

    return(
        <div className="homepage">
            <div className="navbar">
                <a href="/home">Home</a>
                <a href="/goals">Goals</a>
                <a href="/leaderboard">Leaderboard</a>
                <a href="/profile">Profile</a>
            </div>
            <h1>Hello and welcome to the Profile page </h1>
        </div>
        
    )
}

export default Profile;
