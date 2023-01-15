import react from "react";
import './Tribute.css';
import stephen from '../../images/stephen.jpg';
import space from '../../images/space.jpg';

function Tribute() {

    return (
        <div className="main">
            
            <h1 id="title">Stephen William Hawking</h1><br/><br/>
            <div id="img">
                <img src={stephen} alt="error in loding" /><br />
                <small id="caption">
                <b>At NASA's StarChild Learning Center, c.||1980s</b>
                </small>

            </div>
            <div id="tribute-data">


                <h1 className="title-Ap/J">
                    About the Legend
                </h1>



                <p>
                    ☛ Stephen William Hawking CH CBE FRS FRSA (8 January 1942 – 14 March 2018) was an English theoretical physicist, cosmologist, and author who, at the time of his death, was director of research at the Centre for Theoretical Cosmology at the University of Cambridge.<br /><br />
                    ☛  Between 1979 and 2009, he was the Lucasian Professor of Mathematics at the University of Cambridge, widely viewed as one of the most prestigious academic posts in the world.<br /><br />
                    ☛ Hawking was born in Oxford into a family of physicians. In October 1959, at the age of 17, he began his university education at University College, Oxford, where he received a first-class BA degree in physics. In October 1962, he began his graduate work at Trinity Hall at the University of Cambridge where, in March 1966, he obtained his PhD degree in applied mathematics and theoretical physics, specialising in general relativity and cosmology.<br /><br />
                    ☛  In 1963, at age 21, Hawking was diagnosed with an early-onset slow-progressing form of motor neurone disease that gradually, over decades, paralysed him.[20][21] After the loss of his speech, he communicated through a speech-generating device initially through use of a handheld switch, and eventually by using a single cheek muscle.
                    <br /><br /> ☛ Hawking's scientific works included a collaboration with Roger Penrose on gravitational singularity theorems in the framework of general relativity, and the theoretical prediction that black holes emit radiation, often called Hawking radiation. Initially, Hawking radiation was controversial.
                    <br /><br /> ☛ By the late 1970s and following the publication of further research, the discovery was widely accepted as a major breakthrough in theoretical physics. Hawking was the first to set out a theory of cosmology explained by a union of the general theory of relativity and quantum mechanics.
                    <br /><br /> ☛ He was a vigorous supporter of the many-worlds interpretation of quantum mechanics.
                    <br /><br /> ☛ Hawking achieved commercial success with several works of popular science in which he discussed his theories and cosmology in general.
                    <br /><br /> ☛ His book A Brief History of Time appeared on the Sunday Times bestseller list for a record-breaking 237 weeks. Hawking was a Fellow of the Royal Society, a lifetime member of the Pontifical Academy of Sciences, and a recipient of the Presidential Medal of Freedom, the highest civilian award in the United States.
                    <br /><br /> ☛ In 2002, Hawking was ranked number 25 in the BBC's poll of the 100 Greatest Britons. He died in 2018 at the age of 76, after living with motor neurone disease for more than 50 years.
                    <br /><br /><br />
                </p>
            </div>
            {/* <br />
                For more information,
                check out
                <a id="tribute-link" href="#">
                    <b>A.P.J. Abdul Kalam</b> on Wikipedia. [
                    <small>Developed by @<a href="#">
                        Harsh Tripathi.</small></a></a>] */}
        </div>
    );
}
export default Tribute;