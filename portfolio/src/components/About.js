import React from "react";
import image from "../styles/profile-pic.jpg";
import resume from "../styles/resume.png";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import "../styles/about.css";

function About() {
    return (
        <>
            <h2 className="about-color">About</h2>
            <div className="about-container">
                <div className="about-content">
                    <p>
                        Hi! I'm Sophia Tony-Egbuniwe, a passionate
                        full-stack web developer with a background in
                        medical studies. I specialize in JavaScript,
                        React, HTML5, CSS, Python, SQL (Postgres), and
                        NoSQL (MongoDB), using tools like Docker, Django,
                        Visual Studio Code, and Git for seamless development.
                        I'm committed to continuous learning, problem-solving,
                        and multilingualism in spoken and technical forms,
                        all while indulging in my love for theater and the arts.
                    </p>
                </div>
                <div className="about-image">
                    <img src={image} alt="profile" className="small-image"></img>
                </div>
            </div>

            <div>
                <Experience />
            </div>

            <div>
                <h3 className="about-color">Contact</h3>
                <ul>
                    <li>
                        Email: s.tonyegbuniwe@gmail.com
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/sophia-tony-egbuniwe/">LinkedIn</Link>
                    </li>
                    <li>
                        <Link to="https://www.github.com/segbuniwe">GitHub</Link>
                    </li>
                    <li>
                        View/Download resume: <Link to="https://drive.google.com/file/d/1TjgzlmzrhqYwWML9Z4h3Amb-jPZEFU8d/view?usp=sharing">HERE</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default About;
