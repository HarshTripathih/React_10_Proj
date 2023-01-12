import react from "react";
import './Navbar.css';
// import { HashLink as link } from "react-router-hash-link";

function Navbar() {

    return(
        <div className="nav">
            <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/tribute">Tribute Page</a></li>
                <li><a href="/surveyform">Survey Form</a></li>
                <li><a href="/parallax">Parallax Page</a></li>
            </ul>
        </div>
    );
}
export default Navbar;