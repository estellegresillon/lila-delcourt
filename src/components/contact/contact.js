import React, { useState, useEffect } from "react";

import "./contact.scss";
import { WORDS_ARRAY } from "./constants";

const Contact = () => {
  const [projectType, setProjectType] = useState("new project");

  useEffect(() => {
    let count = 0;

    const type = setInterval(function () {
      count++;
      setProjectType(WORDS_ARRAY[count % WORDS_ARRAY.length]);
    }, 1500);

    return () => clearInterval(type);
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="contact-intro">For a <span className="project-type">{projectType}</span></div>
      <div className="contact-title">hello@rafaelbolano.com</div>
      <img className="bg-right"  src="homeland-vert-3.jpg" alt="child-right" />
    </div>
  );
};

export default Contact;
