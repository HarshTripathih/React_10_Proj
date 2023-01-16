import react from "react";
import './Home.css';
import pythonCourseImg from '../../images/pythonCourseImg.webp';
import FrontEndCourseImg from '../../images/FrontEndCourseImg.webp';
import beginwithcplusImg from '../../images/beginwithplusImg.webp';
import BannerLogoImg from '../../images/BannerLogoImg.webp';
import LLdcourseImg from '../../images/LLdcourseImg.webp';
import OfferingClasses from '../../images/OfferingClasses.webp';
import pplogo from '../../images/pplogo.webp';
import renCourseImg from '../../images/renCourseImg.webp';


export default function Home() {
  return (
    <div className="container">
      <header>
        <div className="img">
          <img src={pplogo} alt="logo" />
        </div>
        <div className="menu">
          <div className="men" id="men1"><a href="">Explore Courses</a></div>
          <div className="men" id="men2"><a href="">Success Stories</a></div>
          <div className="men" id="men3"><a href="">Hire From Us</a></div>
          <div className="men" id="men4"><a href="">Campus Program</a></div>
          <div className="men" id="men5"><a href="">Blogs</a></div>
        </div>
        <div className="butt1">
          <div className="but" id="but1">Log In</div>
          <button className="but" id="but2">Sign up</button>
        </div>
      </header>
      <section className="mainpage">
        <section className="leftmain">
          <h1 className="head1">Be a Top</h1>
          <h1 className="head2">Software Engineer</h1>
          <div className="comlogo">
            <img src={BannerLogoImg} alt="companylogo" width="70%" height="200px" />
          </div>
          <div className="lowerleft">
            <button className="butt2">Start Learning for Free</button>
            <p>Watch 100+ free lectures. No commitment, cancel anytime.</p>
          </div>
        </section>
        <section className="rightmain">
          <p id="par1">
            Stuck in your career? We are here!
          </p>
          <p id="par2">
            Get a Free 1-1 Career <br />Counsel</p>
          <div className="form1">
            <form action="">
              <div className="inpu">
                <label className="lab" for="name">Name</label><br />
                <input type="text" name="myName" id="name" />
              </div>
              <div className="inpu">
                <label for="email">E-mail</label><br />
                <input type="email" name="myEmail" id="email" />
              </div>
              <div className="inpu">
                <label for="phoneno">Phone Number</label><br />
                <input type="number" name="myNum" id="phoneno" />
              </div>
              <div id="but400">
                <button className="butt3">Book a Call Now</button>
              </div>
            </form>
          </div>
        </section>
      </section>

      <p style={{ textalign: 'center', fontfamily: 'Times New Roman, Times, serif', color: 'rgb(68, 70, 72)', fontsize: '45px', margintop: '20px', marginbottom: '10px' }}>
        Explore Courses</p>
      <p style={{textalign: 'center',fontsize: '25px', margintop: '40px'}}>Designed for both students and working
        professionals to crack their dream Software Engineering <br />Roles at Top Product Based Companies.</p>
      <section className="scl" id="sellcourse">
        <section className="sco" id="rena"><img className="simg" src={renCourseImg} alt="" />
          <h4 className="hsco">Renaissance for coding</h4>
          <p className="psco">Master Data Structures &amp; Algorithms and System Design. Crack Top-notch Tech roles.
          </p>
          <div className="lowsco">Know More<i className="fa fa-arrow-right" aria-hidden="true"></i></div>
        </section>
        <section className="sco" id="low"><img className="simg" src={LLdcourseImg} alt="" />
          <h4 className="hsco">Low Level Design for Professionals</h4>
          <p className="psco">Design and write highly extensible, maintainable and readable code. Mandatory skill for
            Senior Engineers.</p>
          <div className="lowsco">Know More<i className="fa fa-arrow-right" aria-hidden="true"></i></div>
        </section>
        <section className="sco" id="c++"><img className="simg" src={beginwithcplusImg} alt="" />
          <h4 className="hsco">Begin with Programming in C++</h4>
          <p className="psco">A practical and hands-on course for those who are eager to master C++.
            Beginner-friendly.</p>
          <div className="lowsco">Coming Soon<i className="fa fa-arrow-right" aria-hidden="true"></i></div>
        </section>
      </section>
      <section className="scl" id="sellcourse2">
        <section className="sco" id="front"><img className="simg" src={FrontEndCourseImg} alt="" />
          <h4 className="hsco">Become a brilliant Front-end Engineer</h4>
          <p className="psco">Master the skills of a front-end engineer and build modern, responsive websites</p>
          <div className="lowsco">Coming Soon<i className="fa fa-arrow-right" aria-hidden="true"></i></div>
        </section>
        <section className="sco" id="py"><img className="simg" src={pythonCourseImg} alt="" />
          <h4 className="hsco">Become a Python Expert</h4>
          <p className="psco">Become a Python pro and unlock the door to endless career opportunities</p>
          <div className="lowsco">Coming Soon<i className="fa fa-arrow-right" aria-hidden="true"></i></div>
        </section>
      </section>
      <p style={{ textalign: 'center', color: '#3f4cfc', fontfamily: 'Poppins-SemiBold', fontsize: '15px', margintop: '90px' }}>Our
        Impact</p>
      <h3 style={{ textalign: 'center', color: '#5c5c5f', fontfamily: 'Poppins-SemiBold', fontsize: '29px', margintop: '12px' }}>
        Learn with Definite Outcomes</h3>
      <section id="achim">
        <section className="ach">
          <h2 className="hach">16 LPA+</h2>
          <p className="des1">Average CTC</p>
        </section>
        <section className="ach">
          <h2 className="hach">300%</h2>
          <p className="des1">Average Increment</p>
        </section>
        <section className="ach">
          <h2 className="hach">7500+</h2>
          <p className="des1">Students Enrolled</p>
        </section>
        <section className="ach">
          <h2 className="hach">4.9/5</h2>
          <p className="des1">Google Reviews Rating</p>
        </section>
      </section>
      <p style={{ textalign: 'center', color: '#3f4cfc', fontfamily: 'Poppins-SemiBold', fontsize: '20px', margintop: '90px' }}>Our
        Offering</p>
      <h3 style={{ textalign: 'center', color: '#5c5c5f', fontfamily: 'Poppins-SemiBold', fontsize: '29px', margintop: ' 12px' }}>
        For Organisations</h3>
      <div id="college">
        <div id="imgclassName"><img src={OfferingClasses} alt="" /></div>
        <div id="coloffer">
          <h4 style={{ color: '#4f516b', fontfamily: 'Poppins-SemiBold', fontsize: '2vw', margintop: '30px' }}>For Colleges
            and Universities
          </h4>

          <p style={{ color: '#505050', width: '95% ', fontsize: '1.17vw', margintop: '1vw', marginbottom: '1.8vw', fontfamily: 'Poppins-Regular' }}>
            Boost your Campus Placements and help your students become
            exceptional Software Engineers.</p>
          <button style={{ border: '#3f4cfc 1px solid', width: ' 120px', padding: '5px', borderradius: '2px', color: '#3f4cfc' }}>Know
            More</button>
        </div>
      </div>

    </div>
  );
}