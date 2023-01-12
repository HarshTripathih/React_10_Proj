import react from "react";
import './Navbar.css';
// import { HashLink as link } from "react-router-hash-link";

function Navbar() {

    return(
        <div className="nav">
            <ul>
                <li><a href="/tribute">Tribute</a></li>

            </ul>
        </div>
    );
}
export default Navbar;