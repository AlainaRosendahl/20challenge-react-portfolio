import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {   

    return (
    <div className="navigation" id="navigation">
        <NavLink to="/about">About </NavLink>
        <NavLink to="/portfolio">Portfolio </NavLink>
        <NavLink to="/contact">Contact </NavLink>
        <NavLink to="/resume">Resume</NavLink>
    </div>
  );
}

export default Navigation;