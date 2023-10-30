import React from "react";
import { useLocation, useNavigate } from "react-router";

function Home(){
    const location = useLocation();

    return(
        <div className="homepage">
            <h1>Hello {location.state.id} and welcome to the home page </h1>
        </div>
    )
}

export default Home;
