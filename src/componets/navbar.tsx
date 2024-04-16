import React from "react";
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
import "./nabar.css"

function NavBar(): React.ReactNode {

    return (
        <>
            <div className="navbar">
                <img src={logo} alt="logo" className="color"/>
                    <div>
                        <NavLink to="#">Home</NavLink>
                        <NavLink to="#">Entertaiment</NavLink>
                        <NavLink to="#">Hotels</NavLink>
                        <NavLink to="#">Food</NavLink>
                        <NavLink to="#">Places</NavLink>

                    </div>

            </div>
        </>
    )
}

export default NavBar;