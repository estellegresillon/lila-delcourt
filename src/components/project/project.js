import React from "react";

import { Waypoint } from 'react-waypoint';

import "./project.scss";
import "./project-mobile.scss";

const Project = ({ location }) => {
  const projectName = location.pathname.substr(1);

  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  };

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  };

  return (
    <div className="layout-project">
      <div className="parallax first" style={{ backgroundImage: `url('${projectName}-min.jpg')` }} />

      <section className="section-presentation">
        <Waypoint
          onEnter={() => handleWaypointEnter(".presentation-center")}
          onLeave={() => handleWaypointLeave(".presentation-center")}
        >
          <div className="presentation-center">
            {projectName}
          </div>
        </Waypoint>
      </section>

      <section className="section-photos">
        <div className="photo-left">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-left")}
            onLeave={() => handleWaypointLeave(".img-photo-left")}
          >
            <img rel="preload" className="img-photo-left" src={`${projectName}-1-min.jpg`} alt="project-small-left" />
          </Waypoint>
        </div>
        <div className="photo-right">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-right")}
            onLeave={() => handleWaypointLeave(".img-photo-right")}
          >
            <img rel="preload" className="img-photo-right" src={`${projectName}-2-min.jpg`} alt="project-small-right" />
          </Waypoint>
        </div>
      </section>

      <div className="parallax second" style={{ backgroundImage: `url('${projectName}-3-min.jpg')` }} />

      <footer><div className="logo-link">© Romain Delcourt - Tous droits réservés - Mentions légales</div></footer>
    </div>
  );
};

export default Project;
