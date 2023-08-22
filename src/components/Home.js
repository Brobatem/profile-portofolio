import { useContext } from "react";
import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {/* {video && (
          <video className="bg-video" autoPlay loop muted poster={Poster}>
            <source src={require("../../public/img/video.mp4")} type="video/mp4" />
            <source src={require("../../public/img/video.mp4")} type="video/ogg" />
          </video>
        )} */}
        {leftImg && <img className="leftimagepicture" src={`${leftImgSrc ? leftImgSrc : "img/background.jpg"}`} alt="" />}
        <div className="main-text" id="selector">
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
            {`I'm`} As a Professional Web Developer, I have a high dedication and enthusiasm for creating innovative and efficient web solutions. I have extensive knowledge of web development and constantly strive to enhance my skills and
            creativity in this field. With analytical abilities and expertise in various web technologies, I am ready to take on new challenges in the world of technology development.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a href="#about" onClick={() => changeNav("about")} className="btn link-portfolio-one">
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a href="#work" onClick={() => changeNav("work")} className="btn btn-secondary link-portfolio-two">
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
