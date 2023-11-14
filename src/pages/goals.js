import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Goals() {
    const location = useLocation();
    const userId = location.state ? location.state.id : null;

    return (
        <div className="homepage">
            <div className="navbar">
                <Link to="/home" state={{ id: userId }}>Home</Link>
                <Link to="/goals" state={{ id: userId }}>Goals</Link>
                <Link to="/leaderboard" state={{ id: userId }}>Leaderboard</Link>
                <Link to="/profile" state={{ id: userId }}>Profile</Link>
            </div>
            <h1>Hello {userId} and welcome to the Goals page</h1>
        </div>
    );
}

export default Goals;
