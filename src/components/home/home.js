import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import './home.scss';
import './home-mobile.scss';

import HeroScene from "../hero-scene";
import Map from "./map";

const Home = () => {
  const [hasLoadedWebsite, setHasLoadedWebsite] = useState(false)

  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  useEffect(() => {
    const secondVisit = localStorage.getItem('has_loaded_website');
    secondVisit ? setHasLoadedWebsite(true) : setHasLoadedWebsite(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('has_loaded_website', true);
      setHasLoadedWebsite(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (hasLoadedWebsite) {
      setTimeout(() => {
        const overlay = document.querySelector(".overlay-loading");
        overlay.style.display = "none";
      }, 2000);
    }
  })

  return (
    <div className="layout-home">
      <div style={{
        animation: hasLoadedWebsite ? "2s overlayFadeOut" : "5s overlayFadeOut"
      }} className="overlay-loading">
        <div className="logo-link">
          Romain Delcourt
        </div>
        <div className="underline" />
      </div>

      <HeroScene />

      <section className="section-presentation">
        <Waypoint
          onEnter={() => handleWaypointEnter(".presentation-left")}
          onLeave={() => handleWaypointLeave(".presentation-left")}
        >
          <div className="presentation-left">
            I don't trust words, I trust pictures.
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => handleWaypointEnter(".presentation-right")}
          onLeave={() => handleWaypointLeave(".presentation-right")}
        >
          <div className="presentation-right">
            <div className="separator" />
            The camera is a sketch book, an instrument of intuition and spontaneity.
            When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.
          </div>
        </Waypoint>
      </section>

      <section className="section-photos">
        <div className="photo-left">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-left")}
            onLeave={() => handleWaypointLeave(".img-photo-left")}
          >
            <img className="img-photo-left" src="hero-1.webp" alt="nature-left" />
          </Waypoint>
        </div>
        <div className="photo-right">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-right")}
            onLeave={() => handleWaypointLeave(".img-photo-right")}
          >
            <img className="img-photo-right" src="hero-2.webp" alt="nature-right" />
          </Waypoint>
        </div>
      </section>

      <div className="parallax first" />

      <section className="section-presentation">
        <Waypoint
          onEnter={() => handleWaypointEnter(".third-section")}
          onLeave={() => handleWaypointLeave(".third-section")}
        >
          <div className="presentation-center third-section">
            You don't make a photograph just with a camera.
            You bring to the act of photography all the pictures you have seen, the books you have read,
            the music you have heard, the people you have loved.
            When you photograph people in color, you photograph their clothes.
            But when you photograph people in Black and white, you photograph their souls.
        </div>
        </Waypoint>
      </section>

      <div className="parallax second" />

      <section className="section-contact">
        <Waypoint
          onEnter={() => handleWaypointEnter(".fourth-section")}
          onLeave={() => handleWaypointLeave(".fourth-section")}
        >
          <div className="contact-center fourth-section">
            CONTACT ME
        </div>
        </Waypoint>
      </section>

      <Map />

      <footer><div className="logo-link">© Romain Dumas - All rights reserved</div></footer>
    </div>
  );
}

export default Home;
