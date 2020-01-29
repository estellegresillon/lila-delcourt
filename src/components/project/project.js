import React, { useEffect, useRef } from "react";

import { Waypoint } from 'react-waypoint';

import "./project.scss";
import "./project-mobile.scss";

const Project = ({ location }) => {
  const parallax = useRef(null);
  const presentationCenter = useRef(null);
  const photoRight = useRef(null);
  const photoLeft = useRef(null);
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

    photoLeft.current.style.marginTop = `${(distanceFromTop - containerTop) * -0.5}px`;
    photoRight.current.style.marginTop = `${(distanceFromTop - containerTop) * 0.8}px`;
  }

  useEffect(() => {
    window.addEventListener("scroll", moveIntroElements, false);
    return () => window.removeEventListener("scroll", moveIntroElements, false);
  }, []);

  return (
    <div className="layout-project">
      <div className="parallax first" style={{ backgroundImage: `url('${projectName}.webp')` }}>
        <h1>{projectName}</h1>
        <h2>- 2018 -</h2>
      </div>

      <section className="section-presentation">
        <Waypoint
          onEnter={() => handleWaypointEnter(presentationCenter.current)}
          onLeave={() => handleWaypointLeave(presentationCenter.current)}
        >
          <div className="presentation-center" ref={presentationCenter}>
            {projectName}
          </div>
        </Waypoint>
      </section>

      <section className="section-photos" ref={parallax}>
        <div className="photo-left" ref={photoLeft}>
          <img rel="preload" className="img-photo-left" src={`${projectName}-1.webp`} alt="project-small-left" />
        </div>
        <div className="photo-right" ref={photoRight}>
          <img rel="preload" className="img-photo-right" src={`${projectName}-2.webp`} alt="project-small-right" />
        </div>
      </section>

      <div className="parallax second" style={{ backgroundImage: `url('${projectName}-3.webp')` }} />

      <footer><div className="logo-link">© Rafael Bolano - All rights reserved</div></footer>
    </div>
  );
};

export default Project;
