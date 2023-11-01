import "../styles/skills.css";

function Skills() {
    return (
        <>
            <div className="skills-section">
                <h2 className="skill-title">Programming Languages</h2>
                <div className="skill-bubbles">
                    <div className="skill-bubble">Python</div>
                    <div className="skill-bubble">JavaScript</div>
                    <div className="skill-bubble">HTML</div>
                    <div className="skill-bubble">CSS</div>
                    <div className="skill-bubble">TypeScript</div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="skill-title">Front-End</h2>
                <div className="skill-bubbles">
                    <div className="skill-bubble">React</div>
                    <div className="skill-bubble">Redux Toolkit</div>
                    <div className="skill-bubble">React Router</div>
                    <div className="skill-bubble">React Hooks</div>
                    <div className="skill-bubble">Bootstrap</div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="skill-title">Back-End</h2>
                <div className="skill-bubbles">
                    <div className="skill-bubble">Django</div>
                    <div className="skill-bubble">FastAPI</div>
                    <div className="skill-bubble">Node.js</div>
                    <div className="skill-bubble">Express.js</div>
                    <div className="skill-bubble">RabbitMQ</div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="skill-title">Databases</h2>
                <div className="skill-bubbles">
                    <div className="skill-bubble">SQL</div>
                    <div className="skill-bubble">PostgreSQL (Postgres)</div>
                    <div className="skill-bubble">MySQL</div>
                    <div className="skill-bubble">NoSQL</div>
                    <div className="skill-bubble">MongoDB (Mongoose)</div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="skill-title">Tools & Systems</h2>
                <div className="skill-bubbles">
                    <div className="skill-bubble">Docker</div>
                    <div className="skill-bubble">Git Version Control</div>
                    <div className="skill-bubble">Visual Studio Code</div>
                    <div className="skill-bubble">API Integration</div>
                    <div className="skill-bubble">API Development</div>
                    <div className="skill-bubble">Third-party APIs</div>
                    <div className="skill-bubble">JSON</div>
                    <div className="skill-bubble">YAML</div>
                    <div className="skill-bubble">REST APIs</div>
                    <div className="skill-bubble">Microservices</div>
                    <div className="skill-bubble">Domain Driven Design (DDD)</div>
                </div>
            </div>
        </>
    );
}

export default Skills;
