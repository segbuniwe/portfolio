import "../styles/experience.css";

function Experience() {
    return (
        <>
            <h1 className="about-color">Experience</h1>
            <div className="timeline">
                <div className="timeline-center">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Software Engineer (Volunteer)</h3>
                            <p>Hack For LA</p>
                            <p>Aug 2023 - Present</p>
                            <p>
                                <ul>
                                    <li>
                                        Partner with a specialized team of developers, and designers
                                        to conceptualize, design, and deploy website enhancements.
                                    </li>
                                    <li>
                                        Optimize website performance and user experience utilizing robust knowledge and
                                        experience with web development technologies, including HTML, CSS, JavaScript, and relevant frameworks.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-center">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Medical Scribe</h3>
                            <p>DeepScribe</p>
                            <p>Oct 2022 - Apr 2023</p>
                            <p>
                                <ul>
                                    <li>
                                        Recorded detailed information regarding patient encounters, medical histories,
                                        and treatment plans, charting an average of 8 to 10 patients daily with a high
                                        level of accuracy and efficiency.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-center">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Research Assistant</h3>
                            <p>Columbia University</p>
                            <p>Sep 2019 - Apr 2021</p>
                            <p>
                                <ul>
                                    <li>
                                        Collected and analyzed data obtained from research studies that focused on uncovering
                                        the relationship between stress determinants and psychophysiological indicators.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="about-color">Education</h1>
            <div className="timeline">
                <div className="timeline-center">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Certificate in Software Engineering</h3>
                            <p>Hack Reactor</p>
                            <p>Mar 2023 - Aug 2023</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-center">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Bachelor's Degree (B.A.) in Psychology, Pre-Medicine</h3>
                            <p>Columbia University</p>
                            <p>Sep 2017 - Apr 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
