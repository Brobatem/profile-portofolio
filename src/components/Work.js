import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import { ImgSideBar, SliderSideBar, VideoSideBar, YoutubeSideBar } from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "Hexagon Mega Solusi",
    format: "img",
    project: "WEBSITE",
    client: "PT. Hexagon Mega Solusi",
    duration: "2 weeks",
    budget: "Rp. 3.000.000",
    link: "https://hexagonmegasolusi.com",
  },
  {
    img: "img/projects/project-2.jpg",
    name: "Banua Nusantara News",
    format: "img",
    project: "WEBSITE",
    client: "PT. Banua Nusantara",
    duration: "11 days",
    budget: "Rp. 3.500.000",
    link: "https://banuanusantaranews.com/",
  },
  {
    img: "img/projects/project-3.jpg",
    name: "Taruna Nusa Tama",
    format: "img",
    project: "WEBSITE",
    client: "PT. Taruna Nusa Tama",
    duration: "2 weeks",
    budget: "Rp. 2.000.000",
    link: "https://tarunanusatama.com/",
  },
  {
    img: "img/projects/project-4.jpg",
    name: "Salamuch Megah Utama",
    format: "img",
    project: "WEBSITE",
    client: "PT. Salamuch Megah Utama",
    duration: "1 week",
    budget: "Rp. 3.400.000",
    link: "https://smegahutama.co.id/",
  },
  {
    img: "img/projects/project-5.jpg",
    name: "Natural Semesta Energy",
    format: "img",
    project: "WEBSITE",
    client: "PT. Natural Semesta Energy",
    duration: "2 weeks",
    budget: "Rp. 2.500.000",
    link: "https://naturalsemestaenergy.co.id/",
  },
  {
    img: "img/projects/project-6.jpg",
    name: "Nevdie Production",
    format: "img",
    project: "WEBSITE",
    client: "Nevdie Production House",
    duration: "2 weeks",
    budget: "Rp. 3.000.000",
    link: "https://nevdieproduction.com/",
  },
  {
    img: "img/projects/project-7.jpg",
    name: "JBB GROUP",
    format: "img",
    project: "WEBSITE",
    client: "PT. JANGKAR BAHUREKSO BERIBADAT GROUP",
    duration: "15 Days",
    budget: "Rp. 4.500.000",
    link: "https://jangkarbahureksoberibadatgroup.com/",
  },
  {
    img: "img/projects/project-8.jpg",
    name: "Sterindo Medika Utama",
    format: "img",
    project: "WEBSITE",
    client: "PT. Sterindo Medika",
    duration: "2 weeks",
    budget: "Rp. 3.000.000",
    link: "https://sterindomed.co.id/",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Hive five",
    format: "img",
    project: "WEBSITE",
    client: "PT. Lima Sekawan Indonesia",
    duration: "7 months",
    budget: "Rp. 5.500.000 / month",
    link: " https://hivefive.co.id",
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div className={`portfolio-container ${active ? "slide-out overflow-hidden" : ""}`}>
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">a few recent design and coding projects. Want to see more? Email me.</span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a href="#" data-type="project-1" onClick={() => setActive(i + 1)}>
                        <img src={work.img} alt="Project" className="img-fluid" />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div key={i} className={`project-info-container project-1 ${active === i + 1 ? "slide-in" : ""}`}>
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? <ImgSideBar img={work.img} /> : work.format == "youtube" ? <YoutubeSideBar playing={active} /> : work.format == "slider" ? <SliderSideBar /> : <VideoSideBar playing={active} />}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-8 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label"> Project </span>: <span className="font-weight-600 uppercase">{work.project}</span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label"> Client </span>: <span className="font-weight-600 uppercase">{work.client}</span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label"> Duration </span>: <span className="font-weight-600 ">{work.duration}</span>
                  </li>
                  {/* <li>
                    <i className="fa fa-code" /> <span className="font-weight-400 project-label"> Technologies</span> :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie}</Fragment>
                      ))}
                    </span>
                  </li> */}
                  <li>
                    <i className="fa fa-money" />
                    <span className="font-weight-400 project-label"> Budget</span> : <span className="font-weight-600 ">{work.budget}</span>
                  </li>
                </ul>
                <a href={work.link} className="btn btn-secondary close-project" target="_blank" rel="noopener noreferrer">
                  <span>
                    <i className="fa fa-external-link" />
                    Preview
                  </span>
                </a>
              </div>
              <div className="col-3 p-none text-right">
                <a href="#" className="btn btn-secondary close-project" onClick={() => setActive(null)}>
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span className={`back-mobile ${active ? "is-visible" : ""}`} onClick={() => setActive(null)}>
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
