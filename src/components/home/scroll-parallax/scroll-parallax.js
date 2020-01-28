import React, { useRef, useEffect } from "react";

import "./scroll-parallax.scss";

const ScrollParallax = () => {
  const parallax = useRef(null);
  const photoRight = useRef(null);
  const photoLeft = useRef(null);

  const moveIntroElements = e => {
    const containerTop = parallax.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    photoLeft.current.style.marginTop = `${(distanceFromTop - containerTop) * 0.2}px`;
    photoRight.current.style.marginTop = `${(distanceFromTop - containerTop) * 0.8}px`;
  }

  useEffect(() => {
    window.addEventListener("scroll", moveIntroElements, false);
    return () => window.removeEventListener("scroll", moveIntroElements, false);
  }, []);

  return (
    <section className="section-parallax" ref={parallax}>
      <div className="parallax-left" ref={photoLeft}>
        <img className="img-photo-left"  src="hero-1.webp" alt="nature-left" />
      </div>
      <div className="parallax-right" ref={photoRight}>
        <img className="img-photo-right" src="hero-2.webp" alt="nature-right" />
      </div>
    </section>
  );
};

export default ScrollParallax;
