import React from 'react';
import {BsFileEarmarkPlus} from "react-icons/bs";
import {NavLink} from "react-router-dom";

function Header(props) {
    const leftPartStyle = {
        display: "flex",
        "align-items": "center",
        width: "30%"
    }
    return (
        <header>
            <span style={leftPartStyle}>
                 <span className="header-logo">N & S notes</span>
            <nav className="header-navbar">
                <NavLink className="header-navItem" to="">List</NavLink>
                <NavLink className="header-navItem" to="/about">About</NavLink>
            </nav>
            </span>
            <button className={"header-addNote-button"}>Add new note <BsFileEarmarkPlus/></button>
        </header>
    );
}

export default Header;