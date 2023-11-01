import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Main() {
    return (
        <>
            {/* links straight to project page and about */}
            <div className="content-main">
                <h1 className="title-main">Sophia Tony-Egbuniwe</h1>
                <h2 className="blurb-main">Full-Stack Software Engineer</h2>
                <Link className="link-main" to="/about">Learn More</Link>
                <Link className="link-main margin-left" to="/projects">View Projects</Link>
            </div>
        </>
    );
}

export default Main;
