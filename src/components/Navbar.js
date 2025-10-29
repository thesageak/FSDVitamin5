import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar">
            <h1>My Website</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/nothome">NotHome</Link>
            </nav>
        </div>
    )
}

export default Navbar;

