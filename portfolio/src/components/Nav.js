import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    {/* <li>
                        <a onClick={() => scrollToSection('projects')}>Projects</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('contact')}>Contact</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
