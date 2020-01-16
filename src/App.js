import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import './App.scss';

const PROJECTS = [
  { name: "Golden peaks", className: "golden-peaks" },
  { name: "Wild West", className: "wild-west" },
  { name: "Jellove", className: "jellove" },
  { name: "Razor edges", className: "razor-edges" },
  { name: "volcano", className: "volcano" },
  { name: "vanity", className: "vanity" },
  { name: "BLOG", className: "about" },
  { name: "CONTACT", className: "about" },
  { name: "ABOUT", className: "about" },
];

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showPortfolioOverlay, setShowPortfolioOverlay] = useState(false);
  const [portfolioImage, setSPortfolioImage] = useState("jellove");

  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  const openMenu = () => {
    setShowPortfolio(true)
    setShowPortfolioOverlay(true)

    setTimeout(() => {
      setShowPortfolioOverlay(false)
    }, 2000);
  }

  const closeMenu = () => {
    setShowPortfolioOverlay(true)

    setTimeout(() => {
      setShowPortfolio(false)
    }, 1000);

    setTimeout(() => {
      setShowPortfolioOverlay(false)
    }, 2000);
  }

  return (
    <>
      <div className="overlay-loading">
        <div className="logo-link">
          Romain Delcourt
        </div>
        <div className="underline" />
      </div>

      {showPortfolioOverlay && <div className="overlay-menu" />}
      
      {showPortfolio &&
        <section 
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${portfolioImage}-min.jpg")` }} 
          className="portfolio-gallery">
          <div onClick={() => closeMenu()} className="close-container">
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <label className="close">close</label>
          </div>
          {PROJECTS.map(project => {
            return (
              <div
                className={`portfolio-item ${project.className}`}
                key={project.name}
                onClick={() => console.log(project.name)}
                onMouseEnter={() => setSPortfolioImage(project.className)}
                onMouseLeave={() => setSPortfolioImage("jellove")}
              >
                {project.name}
                <div className="underline" />
              </div>
            )
          })}
        </section>}

      <header>
        <div className="logo-link">
          Romain Delcourt
        </div>
        <div onClick={() => openMenu()} className="menu-item galery-link">
          Menu
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
          <img src="/project2-min.jpg" alt="Your browser does not support the <video> tag"></img>
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
            <img rel="preload" className="img-photo-left" src="hero1-min.jpg" alt="nature-left" />
          </Waypoint>
        </div>
        <div className="photo-right">
          <Waypoint
            onEnter={() => handleWaypointEnter(".img-photo-right")}
            onLeave={() => handleWaypointLeave(".img-photo-right")}
          >
            <img rel="preload" className="img-photo-right" src="hero2-min.jpg" alt="nature-right" />
          </Waypoint>
        </div>
      </section>

      <div className="bg-img parallax first" />

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

      <div className="bg-img parallax second" />
      <footer><div className="logo-link">© Romain Delcourt - Tous droits réservés - Mentions légales</div></footer>
    </>
  );
}

export default App;
