import react from "react";
import './Navbar.css';


function Navbar() {

    return(
        <div className="nav">
            <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/tribute">Tribute Page</a></li>
                <li><a href="/surveyform">Survey Form</a></li>
                <li><a href="/parallax">Parallax Page</a></li>
                <li><a href="/restaurant">Restaurant Page</a></li>
                <li><a href="/event">Event Confrence</a></li>
                <li><a href="/musicdata">Music Page</a></li>
                <li><a href="/imgdata">Image Gallary</a></li>
            </ul>
        </div>
    );
}
export default Navbar;