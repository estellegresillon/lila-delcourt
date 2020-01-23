import React from "react";

import "./hero-scene.scss";
import "./hero-scene-mobile.scss";

const HeroScene = () => {
  return (
    <section className="hero-scene">
      <div className="title">
        Hello, I am a photographer based in Paris.
        I am inspired by nature and traveling around the world.
      </div>
      <i className="fas fa-long-arrow-alt-down" />
      <video muted loop autoPlay id="myVideo">
        <source src="home4.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        <source src="home4.webm" type='video/webm; codecs="vp8, vorbis"' />
        <img src="/hero-2.webp" alt="Your browser does not support the <video> tag"></img>
      </video>
    </section>
  );
};

export default HeroScene;
