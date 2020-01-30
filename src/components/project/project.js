import React, { useState, useEffect, useRef } from "react";
import { Waypoint } from 'react-waypoint';
import { Link } from "react-router-dom";

import "./project.scss";
import "./project-mobile.scss";
import { DESCRIPTION } from "./constants";

const Project = ({ location }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [previousProject, setPreviousProject] = useState("");
  const [nextProject, setNextProject] = useState("");
  const parallax = useRef(null);
  const introductionRef = useRef(null);
  const photoRight = useRef(null);
  const photoCenter = useRef(null);
  const projectName = location.pathname.substr(1);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  const moveIntroElements = e => {
    const containerTop = parallax.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    photoCenter.current.style.marginTop = `${(distanceFromTop - containerTop) * -0.5}px`;
    photoRight.current.style.marginTop = `${(distanceFromTop - containerTop) * 0.3}px`;
  }

  const displayProjectInfos = projectName => {
    switch (projectName) {
      case "aerials":
        setTitle("Aerials");
        setYear("2019");
        setIntroduction(DESCRIPTION.aerials);
        setPreviousProject("/homeland");
        setNextProject("/wild-west");
        break;
      case "wild-west":
        setTitle("Wild West");
        setYear("2018");
        setIntroduction(DESCRIPTION.wildWest);
        setPreviousProject("/aerials");
        setNextProject("/portraits");
        break;
      case "portraits":
        setTitle("Portraits");
        setYear("2016");
        setIntroduction(DESCRIPTION.portraits);
        setPreviousProject("/wild-west");
        setNextProject("/homeland");
        break;
      case "homeland":
        setTitle("Homeland");
        setYear("2014");
        setIntroduction(DESCRIPTION.homeland);
        setPreviousProject("/portraits");
        setNextProject("/aerials");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", moveIntroElements, false);
    return () => window.removeEventListener("scroll", moveIntroElements, false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    displayProjectInfos(projectName);
  }, [projectName]);

  return (
    <div className="layout-project">
      <div 
        className="parallax first" 
        style={{ 
          background: `linear-gradient(to bottom, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url('${projectName}-hor-1.jpg')`
        }}>
        <h1>{title}</h1>
        <h2>- {year} -</h2>
      </div>

      <section className="section-presentation">
        <Waypoint
          onEnter={() => handleWaypointEnter(introductionRef.current)}
          onLeave={() => handleWaypointLeave(introductionRef.current)}
        >
          <div className="presentation-center" ref={introductionRef}>
            {introduction}
          </div>
        </Waypoint>
      </section>

      <section className="section-photos" ref={parallax}>
        <div className="photo-left">
          <img className="img-photo-left" src={`${projectName}-vert-1.jpg`} alt="project-small-left" />
        </div>
        <div className="photo-center" ref={photoCenter}>
          <img className="img-photo-center" src={`${projectName}-vert-2.jpg`} alt="project-small-center" />
        </div>
        <div className="photo-right" ref={photoRight}>
          <img className="img-photo-right" src={`${projectName}-vert-3.jpg`} alt="project-small-right" />
        </div>
      </section>

      <div className="parallax second" style={{ backgroundImage: `url('${projectName}-hor-1.jpg')` }}/>

      <div className="parallax third" style={{ backgroundImage: `url('${projectName}-hor-2.jpg')` }}>
        <Link className="prev-link" to={previousProject}>
          <i className="fas fa-chevron-left" />
          Previous project
        </Link>
        <Link className="home-link" to="/">
          Go back
        </Link>
        <Link className="next-link" to={nextProject}>
          Next project
          <i className="fas fa-chevron-right" />
        </Link>
      </div>

      <footer><div className="logo-link">© Rafael Bolano - All rights reserved</div></footer>
    </div>
  );
};

export default Project;
