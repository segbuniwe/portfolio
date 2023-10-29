import React from "react";

function Nav() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a onClick={() => scrollToSection('main')}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('about')}>About</a>
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
