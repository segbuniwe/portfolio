import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Nav() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink className="my-nav-link" to="/portfolio">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="my-nav-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="my-nav-link" to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className="my-nav-link" to="/skills">Skills</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
