import react from "react";
import { Parallax } from "react-parallax";
import './Parallaxpage.css';
import melody from "../../images/melody.jpg";
import jungle from "../../images/jungle.jpg";
import scenery from "../../images/scenery.jpg";

export default function Parallaxpage() {
    return (
        <div className="main">
            <Parallax strength={600} bgImage={melody}>
                <div className="content">
                    <div className="text-content">
                        Hello React User <br/>I am Normal Parallax
                    </div>
                </div>
            </Parallax>
            <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={jungle}>
                <div className="content">
                    <div className="text-content">
                    Hello React User <br/>Blurr Parallax
                    </div>
                </div>
            </Parallax>
            <Parallax strength={-600} bgImage={scenery}>
                <div className="content">
                    <div className="text-content">
                    Hello React User <br/> Reverse Parallax
                    </div>
                </div>
            </Parallax>
        </div>
    );
}