import img1 from "../styles/ecomoda/ecomoda.png";
import video1 from "../styles/ecomoda/demo.mp4";
import video2 from "../styles/ecomoda/chat-demo.mp4";

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
        </>
    );
}

export default EcoModa;
