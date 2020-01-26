import React from "react";

import "./scroll-parallax.scss";

const ScrollParallax = () => {
  return (
    <section className="section-parallax">
      <div className="parallax-left">
        <img className="img-photo-left" src="hero-1.webp" alt="nature-left" />
      </div>
      <div className="parallax-right">
        <img className="img-photo-right" src="hero-2.webp" alt="nature-right" />
      </div>
    </section>
  );
};

export default ScrollParallax;
