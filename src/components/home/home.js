import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import './home.scss';
import './home-mobile.scss';

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

      <section className="hero-scene">
        <div className="title">Hello, I am a photographer based in <span className="overline">Paris</span>
          . I am inspired by <span className="overline">nature</span> and traveling around the <span className="overline">world</span>.</div>
        <i className="fas fa-long-arrow-alt-down" />
        <video muted loop autoPlay id="myVideo">
          <source src="home4.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          <source src="home4.webm" type='video/webm; codecs="vp8, vorbis"' />
          <img src="/project2.webp" alt="Your browser does not support the <video> tag"></img>
        </video>
      </section>

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
            <img rel="preload" className="img-photo-left" src="hero-1.webp" alt="nature-left" />
          </Waypoint>
        </div>
        <div className="photo-right">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-right")}
            onLeave={() => handleWaypointLeave(".img-photo-right")}
          >
            <img rel="preload" className="img-photo-right" src="hero-2.webp" alt="nature-right" />
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

      <section className="section-photos-cta">
        <div className="photo-left-cta">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-left-cta")}
            onLeave={() => handleWaypointLeave(".img-photo-left-cta")}
          >
            <img rel="preload" className="img-photo-left-cta" src="volcano-1.webp" alt="nature-left" />
          </Waypoint>
        </div>
        <div className="photo-right-cta">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-right-cta")}
            onLeave={() => handleWaypointLeave(".img-photo-right-cta")}
          >
            <img rel="preload" className="img-photo-right-cta" src="volcano-2.webp" alt="nature-right" />
          </Waypoint>
        </div>
      </section>
      <footer><div className="logo-link">© Romain Delcourt - Tous droits réservés - Mentions légales</div></footer>
    </div>
  );
}

export default Home;
