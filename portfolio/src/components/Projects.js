import EcoModa from "./EcoModa";
import ecomoda from "../styles/ecomoda.png";
import RecipeHunt from "./RecipeHunt";
import recipehunt from "../styles/recipehunt.png";
import RouteAuto from "./RouteAuto";
import routeauto from "../styles/routeauto.png";
import ProjectTracker from "./ProjectTracker";
import projectracker from "../styles/projectracker.png";

function Projects() {
    return (
        <>
            {/* <p>
                Card: name, tech stacks, image;
                click on name/see more to open up modal for more info: links
                to webpage, github, things i did for projects, images
            </p> */}

            {/* EcoModa */}
            <div className="card-search mb-3 shadow p-3 d-inline-block">
                <div className="card-img-container">
                    <img
                        src={ecomoda}
                        alt="ecomoda project"
                        className="card-img-top"
                    />
                </div>
                <div>
                    <p>
                        Tech Stacks: Node.js, Express.js, MongoDB (Mongoose),
                        React, JavaScript, CSS, Tailwind, Docker,
                        Amplify (AWS), Git
                    </p>
                </div>
                <button
                    className="btn btn-sm btn-primary mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    See more
                </button>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                EcoModa
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <EcoModa />
                        </div>
                    </div>
                </div>
            </div>

            {/* RecipeHunt */}
            <div className="card-search mb-3 shadow p-3 d-inline-block">
                <div className="card-img-container">
                    <img
                        src={recipehunt}
                        alt="recipehunt project"
                        className="card-img-top"
                    />
                </div>
                <div>
                    <p>
                        Tech Stacks: FastAPI, Python, React,
                        Redux Toolkit, JavaScript, Bootstrap,
                        MongoDB, Docker, Git
                    </p>
                </div>
                <button
                    className="btn btn-sm btn-primary mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                >
                    See more
                </button>
            </div>

            <div
                className="modal fade"
                id="exampleModal1"
                tabIndex="-1"
                aria-labelledby="exampleModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModal1Label">
                                RecipeHunt
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <RecipeHunt />
                        </div>
                    </div>
                </div>
            </div>

            {/* Route Auto */}
            <div className="card-search mb-3 shadow p-3 d-inline-block">
                <div className="card-img-container">
                    <img
                        src={routeauto}
                        alt="route auto project"
                        className="card-img-top"
                    />
                </div>
                <div>
                    <p>
                        Tech Stacks: Django, Python, Bootstrap,
                        PostgreSQL (Postgres), JavaScript, React, Docker,
                        Git
                    </p>
                </div>
                <button
                    className="btn btn-sm btn-primary mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                >
                    See more
                </button>
            </div>

            <div
                className="modal fade"
                id="exampleModal2"
                tabIndex="-1"
                aria-labelledby="exampleModal2Label"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModal2Label">
                                Route Auto
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <RouteAuto />
                        </div>
                    </div>
                </div>
            </div>

            {/* Project & task tracker */}
            <div className="card-search mb-3 shadow p-3 d-inline-block">
                <div className="card-img-container">
                    <img
                        src={projectracker}
                        alt="project tracker project"
                        className="card-img-top"
                    />
                </div>
                <div>
                    <p>
                        Tech Stacks: Django, Python, HTML, CSS, Git
                    </p>
                </div>
                <button
                    className="btn btn-sm btn-primary mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                >
                    See more
                </button>
            </div>
            <div
                className="modal fade"
                id="exampleModal3"
                tabIndex="-1"
                aria-labelledby="exampleModal3Label"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModal3Label">
                                Project & Task Tracker
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <ProjectTracker />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
