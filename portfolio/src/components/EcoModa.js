import img1 from "../styles/ecomoda/ecomoda.png";
import video1 from "../styles/ecomoda/demo.mp4";
import video2 from "../styles/ecomoda/chat-demo.mp4";
import { Link } from "react-router-dom";

function EcoModa() {
    return (
        <>
            <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="img1" />
                    </div>
                    <div className="carousel-item">
                        <video id="video1" className="d-block w-100" controls>
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="carousel-item">
                        <video id="video2" className="d-block w-100" controls>
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <h3>Contributions:</h3>
                <ul>
                    <li>
                        Coded clothing models and routes (GET, POST, DELETE, PUT) via
                        Express.js to build an innovative web application that allows
                        users to give away or trade clothing items, increasing sustainability
                        in fashion.
                    </li>
                    <li>
                        Incorporated the third-party, Passage, through a backend Express.js and
                        a frontend React to have passwordless authentication via passkeys.
                    </li>
                    <li>
                        Debugged team’s AI chat code to allow for integration with Express.js server
                        and React frontend, creating a dynamic feature on the web app.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Links:</h3>
                <ul>
                    <li>
                        <Link to="https://github.com/segbuniwe/ecomoda">GitHub Repo</Link>
                    </li>
                    <li>
                        <Link to="https://main.d3u3eipz2iqdk9.amplifyapp.com/">Visit Website</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Awards & Honors:</h3>
                <ul>
                    <li>
                        Women Who Code Hackathon For Social Good 2023 Top 20 Project
                    </li>
                    <li>
                        Women Who Code Hackathon For Social Good 2023 Finalist
                    </li>
                </ul>
            </div>
        </>
    );
}

export default EcoModa;
