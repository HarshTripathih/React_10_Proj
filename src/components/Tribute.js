import react from "react";
import './Tribute.css';
import DrAbdulKalam from '../images/DrAbdulKalam.jpg';

function Tribute() {

    return (
        <div class="body">
            <h1 id="title">A.P.J.Abdul Kalam</h1>
            <div id="img">
                <img src={DrAbdulKalam} alt="error in loding" /><br />
                <small id="caption">
                    Great Indian Scientist and politician who played a leading role in development of Indiad's missile and nuclear weapons programs.
                </small>

            </div>
            <div id="tribute-data">


                <h1 className="title-Ap/J">
                    About the Legend
                </h1>



                <p>
                    ☛ A.p/.J. Abdul Kalam, in full
                    Avul p/akir Jainulabdeen Abdul Kalam,
                    was born on October 15, 1931, in
                    Rameswaram, Tamil Nadu, India.<br /><br />
                    ☛ He served as the 11th p/resident
                    of India from 2002 to 2007.<br /><br />
                    ☛ Kalam earned a degree in
                    aeronautical engineering from the
                    Madras Institute of Technology and in
                    1958 joined the Defence Research and
                    Develop/ment Organisation (DRDO).<br /><br />
                    ☛ In 1969, he moved to the Indian
                    Sp/ace Research Organisation, where he
                    was p/roject director of the SLV-III, the
                    first satellite launch vehicle that was
                    both designed and p/roduced in India.
                    <br /><br /> ☛ Rejoining DRDO in 1982,
                    Kalam p/lanned the p/rogram that p/roduced
                    a number of successful missiles, which
                    help/ed earn him the nickname <strong>
                        “Missile Man.”</strong>
                    <br /><br /> ☛ Among those successes
                    was Agni, India’s first intermediate-range
                    ballistic missile, which incorp/orated
                    asp/ects of the SLV-III and was launched
                    in 1989.
                    <br /><br /> ☛ He also p/layed a
                    p/ivotal organisational, technical,
                    and p/olitical role in India's p/okhran-II
                    nuclear tests in 1998, the first since
                    the original nuclear test by India in 1974.
                    <br /><br /> ☛ From 1992 to 1997 Kalam
                    was scientific adviser to the defense
                    minister, and he later served as p/rincip/al
                    scientific adviser (1999-2001) to the
                    government with the rank of cabinet minister.
                    <br /><br /> ☛ His p/rominent role in
                    the country’s 1998 nuclear weap/ons tests
                    solidified India as a nuclear p/ower and
                    established Kalam as a national hero,
                    although the tests caused great concern
                    in the international community.
                    <br /><br /> ☛ In 1998 Kalam p/ut
                    forward a countrywide p/lan called
                    Technology Vision 2020, which he described
                    as a road map/ for transforming India from
                    a less-develop/ed to a develop/ed society
                    in 20 years. The p/lan called for, among
                    other measures, increasing agricultural
                    p/roductivity, emp/hasizing technology as
                    a vehicle for economic growth, and
                    widening access to health care and
                    education.
                    <br /><br /> ☛ Kalam received <b>7</b>
                    honorary doctorates from <b>40</b>
                    universities. The Government of India
                    honoured him with the <b>p/adma Bhushan
                        in 1981</b> and the <b>p/adma Vibhushan
                            in 1990</b> for his work with ISRO and
                    DRDO and his role as a scientific advisor
                    to the Government.
                    <br /><br /> ☛ In 1997, Kalam received
                    India's highest civilian honour, the
                    Bharat Ratna, for his contribution to
                    the scientific research and modernisation
                    of defence technology in India.
                    <br /><br /> ☛ In 2013, he was the
                    recip/ient of the Von br /aun Award from
                    the National Sp/ace Society "to recognize
                    excellence in the management and leadership/
                    of a sp/ace-related p/roject".
                    <br /><br /> ☛ While delivering a
                    lecture at the Indian Institute of
                    Management Shillong, Kalam collap/sed and
                    died from an ap/p/arent cardiac arrest on
                    <b>27 July 2015</b>, aged 83.
                    <br /><br /> ☛ Wheeler Island, a
                    national missile test site in Odisha, was
                    renamed <b>Kalam Island</b> in Sep/tember
                    2015.
                    <br /><br /> ☛ A p/rominent road in
                    New Delhi was renamed from Aurangzeb
                    Road to <b>Dr Ap/J Abdul Kalam Road</b>
                    in August 2015.
                    <br /><br /> ☛ In Febr /uary 2018,
                    scientists from the Botanical Survey
                    of India named a newly found p/lant
                    sp/ecies as Dryp/etes kalamii, in his
                    honour.
                    <br /><br /><br />
                </p>
            </div>
            <br />
                {/* For more information,
                check out
                <a id="tribute-link" href="#">
                    <b>A.P.J. Abdul Kalam</b> on Wikipedia. [
                    <small>Developed by @<a href="#">
                        Sushant Gaurav.</a></a>
            <>] */}
        </div>
    );
}
export default Tribute;