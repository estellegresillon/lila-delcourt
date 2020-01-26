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
          I don't trust words, I trust pictures.
        </div>
      </Waypoint>
      <Waypoint
        onEnter={() => handleWaypointEnter(presentationRight.current)}
        onLeave={() => handleWaypointLeave(presentationRight.current)}
      >
        <div className="presentation-right" ref={presentationRight}>
          <div className="separator" />
          The camera is a sketch book, an instrument of intuition and spontaneity.
          When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.
        </div>
      </Waypoint>
    </section>
  );
};

export default Presentation;
