import React, { useState, useEffect, useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./project.scss";
import "./project-mobile.scss";
import { DESCRIPTION } from "./constant";

const Project = ({ location }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [introduction, setIntroduction] = useState("");
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
    photoRight.current.style.marginTop = `${(distanceFromTop - containerTop) * 0.4}px`;
  }

  const displayProjectInfos = projectName => {
    switch (projectName) {
      case "aerials":
        setTitle("Aerials");
        setYear("2019");
        setIntroduction(DESCRIPTION.aerials);
        break;
      case "wild-west":
        setTitle("Wild West");
        setYear("2018");
        setIntroduction(DESCRIPTION.wildWest);
        break;
      case "portraits":
        setTitle("Portraits");
        setYear("2016");
        setIntroduction(DESCRIPTION.portraits);
        break;
      case "homeland":
        setTitle("Homeland");
        setYear("2014");
        setIntroduction(DESCRIPTION.homeland);
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
    displayProjectInfos(projectName);
  }, [projectName]);

  return (
    <div className="layout-project">
      <div className="parallax first" style={{ backgroundImage: `url('${projectName}-hor-1.jpg')` }}>
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

      <div className="parallax second" style={{ backgroundImage: `url('${projectName}-hor-2.jpg')` }} />

      <footer><div className="logo-link">© Rafael Bolano - All rights reserved</div></footer>
    </div>
  );
};

export default Project;
