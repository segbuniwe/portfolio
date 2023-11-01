import React from "react";
import image from "../styles/profile-pic.jpg";
import resume from "../styles/resume.png";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h2>About</h2>
            <img src={image} alt="profile"></img>
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
            <div>
                {/* <p>Resume: */}
                {/* <img src={resume} alt="resume"></img> */}
                Download resume: <Link to="https://drive.google.com/file/d/1TjgzlmzrhqYwWML9Z4h3Amb-jPZEFU8d/view?usp=sharing">HERE</Link>
                {/* </p> */}
            </div>
            {/* Contact: LinkedIn, Email, GitHub */}
        </>
    );
}

export default About;
