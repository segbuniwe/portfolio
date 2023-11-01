import img1 from "../styles/projectracker/img1.png";
import img2 from "../styles/projectracker/img2.png";
import img3 from "../styles/projectracker/img3.png";
import img4 from "../styles/projectracker/img4.png";
import img5 from "../styles/projectracker/img5.png";
import img7 from "../styles/projectracker/img7.png";
import img8 from "../styles/projectracker/img8.png";
import img9 from "../styles/projectracker/img9.png";
import img10 from "../styles/projectracker/img10.png";
import img11 from "../styles/projectracker/img11.png";
import img12 from "../styles/projectracker/img12.png";
import img13 from "../styles/projectracker/img13.png";
import img14 from "../styles/projectracker/img14.png";
import { Link } from "react-router-dom";

function ProjectTracker() {
    return (
        <>
            <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="10" aria-label="Slide 11"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="11" aria-label="Slide 12"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="12" aria-label="Slide 13"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="img1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="img2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="img3" />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="img4" />
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="d-block w-100" alt="img5" />
                    </div>
                    <div className="carousel-item">
                        <img src={img7} className="d-block w-100" alt="img7" />
                    </div>
                    <div className="carousel-item">
                        <img src={img8} className="d-block w-100" alt="img8" />
                    </div>
                    <div className="carousel-item">
                        <img src={img9} className="d-block w-100" alt="img9" />
                    </div>
                    <div className="carousel-item">
                        <img src={img10} className="d-block w-100" alt="img10" />
                    </div>
                    <div className="carousel-item">
                        <img src={img11} className="d-block w-100" alt="img11" />
                    </div>
                    <div className="carousel-item">
                        <img src={img12} className="d-block w-100" alt="img12" />
                    </div>
                    <div className="carousel-item">
                        <img src={img13} className="d-block w-100" alt="img13" />
                    </div>
                    <div className="carousel-item">
                        <img src={img14} className="d-block w-100" alt="img14" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <h3>Contributions:</h3>
                <ul>
                    <li>
                        Originated a Django-run application for users to monitor and track projects and associated tasks.
                    </li>
                    <li>
                        Engineered a calendar app using Python and HTML as part of the Django project to give users a visual
                        cue for the due dates of their tasks, showing a highlighted red when a task is past due and incomplete,
                        green when a task is completed, and normal text when a task is incomplete and not yet due.
                    </li>
                    <li>
                        Created a timeline view in Django, giving a user the ability to see a vertical, ordered timeline of their
                        due dates, and as they change the status of their tasks to complete, the timeline will turn green for that task.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Links:</h3>
                <ul>
                    <li>
                        <Link to="https://github.com/segbuniwe/project-and-task-tracker">GitHub Repo</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProjectTracker;
