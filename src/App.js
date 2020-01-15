import React from 'react';
import { Waypoint } from 'react-waypoint';

import './App.scss';

const App = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  return (
    <>
      <header>
        <div className="logo-link">
          Romain Delcourt
        </div>
        <div className="menu-item galery-link">
          Projects
          <div className="underline" />
        </div>
        <div className="menu-item menu-link">
          Menu
          <div className="underline" />
        </div>
      </header>

      <section className="hero-scene">
        <div className="title">Hello, I am a photographer based in <span className="overline">Paris</span>
          . I am inspired by <span className="overline">nature</span> and traveling around the <span className="overline">world</span>.</div>
        <i className="fas fa-long-arrow-alt-down" />
        <video muted loop autoPlay id="myVideo">
          <source src="home4.mp4" type="video/mp4" />
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
            <img className="img-photo-left" src="hero1.jpg" alt="nature-left" />
          </Waypoint>
        </div>
        <div className="photo-right">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-right")}
            onLeave={() => handleWaypointLeave(".img-photo-right")}
          >
            <img className="img-photo-right" src="hero2.jpg" alt="nature-right" />
          </Waypoint>
        </div>
      </section>

      <div className="bg-img parallax" />

      <section className="section-presentation">
        <Waypoint
          onEnter={() => handleWaypointEnter(".third-section")}
          onLeave={() => handleWaypointLeave(".third-section")}
        >
          <div style={{}} className="presentation-center third-section">
            You don't make a photograph just with a camera.
            You bring to the act of photography all the pictures you have seen, the books you have read,
            the music you have heard, the people you have loved.
            When you photograph people in color, you photograph their clothes.
            But when you photograph people in Black and white, you photograph their souls.
        </div>
        </Waypoint>
      </section>
      <footer><div className="logo-link">© Romain Delcourt - Tous droits réservés - Mentions légales</div></footer>
    </>
  );
}

export default App;
