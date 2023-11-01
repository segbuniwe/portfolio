import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div>
                <div className="phantom">
                    <div className="style">
                        <Link className="footer-link-main" to="mailto:s.tonyegbuniwe@gmail.com">Email</Link>
                        <Link className="footer-link-main footer-margin-left" to="https://www.linkedin.com/in/sophia-tony-egbuniwe/">LinkedIn</Link>
                        <Link className="footer-link-main footer-margin-left" to="https://www.github.com/segbuniwe">GitHub</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
