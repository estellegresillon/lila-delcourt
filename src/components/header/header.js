import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

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

const Header = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showPortfolioOverlay, setShowPortfolioOverlay] = useState(false);
  const [portfolioImage, setSPortfolioImage] = useState("jellove");

  const openMenu = () => {
    setShowPortfolio(true);
    setShowPortfolioOverlay(true);

    setTimeout(() => {
      setShowPortfolioOverlay(false);
    }, 2000);
  };

  const closeMenu = () => {
    setShowPortfolioOverlay(true);

    setTimeout(() => {
      setShowPortfolio(false);
    }, 1000);

    setTimeout(() => {
      setShowPortfolioOverlay(false);
    }, 2000);
  };

  return (
    <>
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
              <Link 
                key={project.name}
                onClick={() => closeMenu()}
                to={project.className}
                onMouseEnter={() => setSPortfolioImage(project.className)}
              >
                <div className={`portfolio-item ${project.className}`}>
                  {project.name}
                  <div className="underline" />
                </div>
              </Link>
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
    </>
  );
};

export default Header;
