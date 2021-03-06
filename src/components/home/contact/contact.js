import React, { useRef } from "react";
import { Waypoint } from 'react-waypoint';
import { Link } from "react-router-dom";

import "./contact.scss";
import Map from "./map";

const Contact = ({ handleWaypointEnter, handleWaypointLeave }) => {
  const contact = useRef(null);

  return (
    <>
      <section className="section-contact">
        <Waypoint
          onEnter={() => handleWaypointEnter(contact.current)}
          onLeave={() => handleWaypointLeave(contact.current)}
        >
          <div className="contact-center fourth-section" ref={contact}>
            <h2>Let's get in touch</h2>
            <p>For business inquiries, a special project or any questions, feel free to contact me :</p>
            <Link to="/contact">
              <button className="btn-contact">
                CONTACT ME
                <div className="btn-background" />
              </button>
            </Link>
          </div>
        </Waypoint>
      </section>
      <Map />
    </>
  );
};

export default Contact