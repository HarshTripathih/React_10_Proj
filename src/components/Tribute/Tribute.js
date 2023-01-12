import react from "react";
import './Tribute.css';
import DrAbdulKalam from '../../images/DrAbdulKalam.jpg';

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
                    ☛ A.P.J. Abdul Kalam, in full
                    Avul pakir Jainulabdeen Abdul Kalam,
                    was born on October 15, 1931, in
                    Rameswaram, Tamil Nadu, India.<br /><br />
                    ☛ He served as the 11th president
                    of India from 2002 to 2007.<br /><br />
                    ☛ Kalam earned a degree in
                    aeronautical engineering from the
                    Madras Institute of Technology and in
                    1958 joined the Defence Research and
                    Development Organisation (DRDO).<br /><br />
                    ☛ In 1969, he moved to the Indian
                    Space Research Organisation, where he
                    was project director of the SLV-III, the
                    first satellite launch vehicle that was
                    both designed and produced in India.
                    <br /><br /> ☛ Rejoining DRDO in 1982,
                    Kalam planned the program that produced
                    a number of successful missiles, which
                    helped earn him the nickname <strong>
                        “Missile Man.”</strong>
                    <br /><br /> ☛ Among those successes
                    was Agni, India’s first intermediate-range
                    ballistic missile, which incorporated
                    aspects of the SLV-III and was launched
                    in 1989.
                    <br /><br /> ☛ He also played a
                    pivotal organisational, technical,
                    and political role in India's pokhran-II
                    nuclear tests in 1998, the first since
                    the original nuclear test by India in 1974.
                    <br /><br /> ☛ From 1992 to 1997 Kalam
                    was scientific adviser to the defense
                    minister, and he later served as principal
                    scientific adviser (1999-2001) to the
                    government with the rank of cabinet minister.
                    <br /><br /> ☛ His prominent role in
                    the country’s 1998 nuclear weapons tests
                    solidified India as a nuclear power and
                    established Kalam as a national hero,
                    although the tests caused great concern
                    in the international community.
                    <br /><br /> ☛ In 1998 Kalam put
                    forward a countrywide plan called
                    Technology Vision 2020, which he described
                    as a road map for transforming India from
                    a less-developed to a developed society
                    in 20 years. The plan called for, among
                    other measures, increasing agricultural
                    productivity, emphasizing technology as
                    a vehicle for economic growth, and
                    widening access to health care and
                    education.
                    <br /><br /> ☛ Kalam received <b>7</b>
                    honorary doctorates from <b>40</b>
                    universities. The Government of India
                    honoured him with the <b>padma Bhushan
                        in 1981</b> and the <b>padma Vibhushan
                            in 1990</b> for his work with ISRO and
                    DRDO and his role as a scientific advisor
                    to the Government.
                    <br /><br /> ☛ In 1997, Kalam received
                    India's highest civilian honour, the
                    Bharat Ratna, for his contribution to
                    the scientific research and modernisation
                    of defence technology in India.
                    <br /><br /> ☛ In 2013, he was the
                    recipient of the Von br aun Award from
                    the National Space Society "to recognize
                    excellence in the management and leadership
                    of a space-related project".
                    <br /><br /> ☛ While delivering a
                    lecture at the Indian Institute of
                    Management Shillong, Kalam collapsed and
                    died from an apparent cardiac arrest on
                    <b>27 July 2015</b>, aged 83.
                    <br /><br /> ☛ Wheeler Island, a
                    national missile test site in Odisha, was
                    renamed <b>Kalam Island</b> in September
                    2015.
                    <br /><br /> ☛ A prominent road in
                    New Delhi was renamed from Aurangzeb
                    Road to <b>Dr APJ Abdul Kalam Road</b>
                    in August 2015.
                    <br /><br /> ☛ In February 2018,
                    scientists from the Botanical Survey
                    of India named a newly found plant
                    species as Drypetes kalamii, in his
                    honour.
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