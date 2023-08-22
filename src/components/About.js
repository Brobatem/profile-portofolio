import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">I design and code beautiful things, and I love what I do.</span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img className="img-fluid d-block" src="img/dark-about.jpg" alt="" />
            </div>
            <p className="d-block d-md-none">{`I'm`} a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Rosyid
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Ridho
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>20 june 2001
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Indonesia
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>2 years
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Tangerang, Banten
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    Indonesia
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+62 895-1772-4836
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    rrosyid849@gmail.com
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="https://drive.google.com/uc?export=downIoad&id=1Q24yFwRzhVRVaTe2Aa6JMgeWqMd5NZ08" className="btn btn-resume" target="_blank">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">experience</h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Web Developer
                        <span className="separator" />
                        <span className="font-weight-700">
                          <a id="link" href="https://hivefive.co.id/">
                            Hive Five
                          </a>
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <li>
                        <p>Responsible for developing the interactive appearance of the website using HTML, CSS and JavaScript to make it accessible to users</p>
                      </li>
                      <li>
                        <p>Perform development of the back end of the website such as servers, databases and business logic to ensure application functionality and performance.</p>
                      </li>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">Education</h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - NOW
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Informatics Engineering
                        <span className="separator" />
                        <span className="font-weight-700">
                          <a id="link" href="https://raharja.ac.id/">
                            Raharja University
                          </a>
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>Raharja University in 2039 is ready to give birth to graduates with quality, integrity, highly competitive and able to increase the trust of the wider community and be listed on a World ranking campus</p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">skills</h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Html</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={80} style={{ width: "80%" }} />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Javascript</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={60} style={{ width: "60%" }} />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Css</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={75} style={{ width: "75%" }} />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">jquery</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={65} style={{ width: "65%" }} />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Wordpress</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={90} style={{ width: "90%" }} />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React js</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={85} style={{ width: "85%" }} />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Video Editor</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={60} style={{ width: "60%" }} />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Copywriting</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={75} style={{ width: "75%" }} />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">graphic design</span>
              <div className="chart-bar">
                <span className="item-progress" data-percent={80} style={{ width: "80%" }} />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
