import React, { useEffect } from 'react';

import './home.scss';
import './home-mobile.scss';

import HeroScene from "./hero-scene";
import Presentation from "./presentation";
import ScrollParallax from "./scroll-parallax";
import Paragraph from "./paragraph";
import Discover from "./discover";
import Contact from "./contact";

const Home = () => {
  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="layout-home">
      <div className="overlay-loading">
        <div className="logo-link">
          Rafael Bolano
        </div>
        <div className="underline" />
      </div>

      <HeroScene />
      <Presentation
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <ScrollParallax />
      <div className="parallax first" />
      <Paragraph
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <Discover />
      <Contact
        handleWaypointEnter={handleWaypointEnter}
        handleWaypointLeave={handleWaypointLeave}
      />
      <footer><div className="logo-link">© Rafael Bolano - All rights reserved</div></footer>
    </div>
  );
}

export default Home;
