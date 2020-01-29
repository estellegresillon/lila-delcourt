import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./presentation.scss";

const Presentation = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const presentationLeft = useRef(null);
  const presentationRight = useRef(null);

  return (
    <section className="section-presentation">
      <Waypoint
        onEnter={() => handleWaypointEnter(presentationLeft.current)}
        onLeave={() => handleWaypointLeave(presentationLeft.current)}
      >
        <div className="presentation-left" ref={presentationLeft}>
          The camera is a sketch book, an instrument of intuition and spontaneity.
        </div>
      </Waypoint>
      <Waypoint
        onEnter={() => handleWaypointEnter(presentationRight.current)}
        onLeave={() => handleWaypointLeave(presentationRight.current)}
      >
        <div className="presentation-right" ref={presentationRight}>
          <div className="separator" />
          I am an advocate of film for the timeless and elegant images it creates. 
          With my background in journalism, storytelling is important to me, which means I value real moments, details and photos that encapsulate a sense of place.
        </div>
      </Waypoint>
    </section>
  );
};

export default Presentation;
