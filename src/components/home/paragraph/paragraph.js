import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';

import "./paragraph.scss";

const Paragraph = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const paragraph = useRef(null);

  return (
    <section className="section-paragraph">
      <Waypoint
        onEnter={() => handleWaypointEnter(paragraph.current)}
        onLeave={() => handleWaypointLeave(paragraph.current)}
      >
        <div className="paragraph-center third-section" ref={paragraph}>
          You don't make a photograph just with a camera.
          You bring to the act of photography all the pictures you have seen, the books you have read,
          the music you have heard, the people you have loved.
          When you photograph people in color, you photograph their clothes.
          But when you photograph people in Black and white, you photograph their souls.
      </div>
      </Waypoint>
    </section>
  );
};

export default Paragraph;
