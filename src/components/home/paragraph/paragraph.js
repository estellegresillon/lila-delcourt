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
          Originally from Santiago, Chili, I found my passion in photography while working as a staff photographer 
          for my college newspaper. I've come a long way since then, going on to assist well known photographers 
          on the side as I pursued journalism in Washington D.C. and then in London. I kept coming back to photography 
          because I genuinely felt connected to it, and because it made me feel more connected to people and the 
          world around me.
      </div>
      </Waypoint>
    </section>
  );
};

export default Paragraph;
