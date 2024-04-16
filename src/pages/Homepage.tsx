import React from "react";
import { NavLink } from "react-router-dom";
import "./Homepage.css"
import SlideShow from "../componets/slideshow";

function HomePage(): React.ReactNode{

    return(
        <div className="banner">
            <SlideShow/>
        <div className="content">
            <h1>WELCOME TO <span id="city-name">CHICAGO</span></h1>
            <p>Where Memories are Created. Come See What We Have to Offer!</p>
            <div>
               <NavLink to='#'><button id="button-links" type="button"><span className="button-span"></span>SIGN IN</button></NavLink> 
               <NavLink to='#'><button id="button-links" type="button"><span className="button-span"></span>JOIN</button></NavLink>
            </div>
        </div>
        
        </div>
    )
}

export default HomePage;