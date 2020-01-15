import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import './App.scss';

const PROJECTS = [
  { name: "Project 1", className: "project1" },
  { name: "Project 2", className: "project2" },
  { name: "Project 3", className: "project3" },
  { name: "Project 4", className: "project4" },
  { name: "Project 5", className: "project5" },
  { name: "Project 6", className: "project6" },
  { name: "Project 7", className: "project7" },
  { name: "Project 8", className: "project8" },
  { name: "Project 9", className: "project9" },
];

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [portfolioImage, setSPortfolioImage] = useState("project2");

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
      <div className="overlay-loading">
        <div className="logo-link">
          Romain Delcourt
        </div>
        <div className="underline" />
      </div>
      
      {showPortfolio &&
        <section 
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${portfolioImage}-min.jpg")` }} 
          className="portfolio-gallery">
          <div className="close-gallery">
            <i onClick={() => setShowPortfolio(false)} className="fas fa-times" />
          </div>
          {PROJECTS.map(project => {
            return (
              <div
                className={`portfolio-item ${project.className}`}
                key={project.name}
                onMouseEnter={() => setSPortfolioImage(project.className)}
                onMouseLeave={() => setSPortfolioImage("project2")}
              >
                {project.name}
              </div>
            )
          })}
        </section>}

      <header>
        <div className="logo-link">
          Romain Delcourt
        </div>
        <div onClick={() => setShowPortfolio(true)} className="menu-item galery-link">
          Projects
          <div className="underline" />
        </div>
      </header>

      <section className="hero-scene">
        <div className="title">Hello, I am a photographer based in <span className="overline">Paris</span>
          . I am inspired by <span className="overline">nature</span> and traveling around the <span className="overline">world</span>.</div>
        <i className="fas fa-long-arrow-alt-down" />
        <video muted loop autoPlay id="myVideo">
          <source src="home4.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          <source src="home4.webm" type='video/webm; codecs="vp8, vorbis"' />
          <img src="/project2-min.jpg" title="Your browser does not support the <video> tag"></img>
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
