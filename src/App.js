import React from 'react';

import './App.scss';

const App = () => {
  return (
    <>
      <header>
        <div className="logo-link">
          Romain Delcourt
          <div className="underline" />
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

      <div className="hero-scene">
        <div className="title">Hello, I am a photographer based in <span className="overline">Paris</span>
          . I am inspired by <span className="overline">nature</span> and traveling around the <span className="overline">world</span>.</div>
        <i className="fas fa-long-arrow-alt-down" />
        <video muted loop autoPlay id="myVideo">
          <source src="home4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="section-presentation">
        <div className="presentation-left">
          We don't trust words, we trust pictures.
        </div>
        <div className="presentation-right">
          <div className="separator" />
          I do not know what I may appear to the world, but to myself I seem to have been only like a boy
          playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier
          shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.
        </div>
      </div>

      <div className="section-photos">
        <div className="photo-left">
          <img src="hero1.jpg" alt="nature-left" />
        </div>
        <div className="photo-right">
          <img src="hero2.jpg" alt="nature-right" />
        </div>
      </div>

      <div className="fullscreen-img">
        <img src="/project1-min.jpg" alt="project1" />
      </div>

      <div className="section-presentation">
        <div className="presentation-center">
          I do not know what I may appear to the world, but to myself I seem to have been only like a boy
          playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier
          shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.
        </div>
      </div>
    </>
  );
}

export default App;
