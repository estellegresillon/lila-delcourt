import React from "react";

import "./hero-scene.scss";
import "./hero-scene-mobile.scss";

const HeroScene = () => {
  const scrollToSection = () => {
    const sectionOne = document.querySelector(".section-presentation");
    sectionOne.scrollIntoView();
  }

  return (
    <section className="hero-scene">
      <div className="title">
        <span className="title-big">I am Romain Delcourt,</span>
        <br />
        A <span className="overline">photographer</span> based in <span className="overline">Paris</span> and inspired by nature and wildlife.
      </div>
      <div className="hero-scene-img" />
      <i className="fas fa-long-arrow-alt-down" onClick={() => scrollToSection()} />
      <i className="fab fa-instagram" />
      <div className="video-overlay" />
      <video muted loop autoPlay id="myVideo">
        <source src="home.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    </section>
  );
};

export default HeroScene;
