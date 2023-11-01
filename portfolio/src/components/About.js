import React from "react";
import image from "../styles/profile-pic.jpg";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import "../styles/about.css";

function About() {
    return (
        <>
            <h1 className="about-color">About</h1>
            <div className="about-container">
                <div className="about-content">
                    <p>
                        Hi! I'm Sophia Tony-Egbuniwe, a passionate
                        full-stack web developer with a background in
                        medical studies. I specialize in full-stack software/web
                        development using JavaScript and Python primarily. I have
                        experience utilizng React, HTML, CSS, Python, JavaScript,
                        SQL (Postgres), and NoSQL (MongoDB), also tools like Docker,
                        Visual Studio Code, and Git for seamless development.
                        I am committed to continuous learning and problem-solving,
                        always trying to pick up new skills and code each day. As a
                        side interest, I enjoy multilingualism in spoken and technical forms,
                        all while indulging in my love for theater and the arts.
                    </p>
                    <p>
                        View/Download resume: <Link className="resume-link" to="https://drive.google.com/file/d/1TjgzlmzrhqYwWML9Z4h3Amb-jPZEFU8d/view?usp=sharing">HERE</Link>
                    </p>
                </div>
                <div className="about-image">
                    <img src={image} alt="profile" className="small-image"></img>
                </div>
            </div>

            <div>
                <Experience />
            </div>
        </>
    );
}

export default About;
