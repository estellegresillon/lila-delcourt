import React, { useState } from "react";

import "./menu.scss";

const Menu = ({ visibleRef, willDisappear, setIsComponentVisible, offsetTop }) => {
  const [willClose, setWillClose] = useState(false);

  const handleClose = () => {
    setWillClose(true);
    setTimeout(() => {
      setIsComponentVisible(false);
    }, 1000);
  };

  return (
    <nav 
      ref={visibleRef}
      style={{ animation: willDisappear || willClose ? "1s slideBack" : "0.5s slideFromRight" }}
    >
      <div className="close-menu" onClick={() => handleClose()}>
        CLOSE
      </div>
      <div 
        className="list-wrapper"
        style={{ 
          animation: willDisappear || willClose ? "0.5s fadeOutText" : "1s fadeInText",
          animationFillMode: willDisappear || willClose ? "forwards" : ""
        }}
      >
        <div className="menu-item">Nature</div>
        <div className="menu-item">Wildlife</div>
        <div className="menu-item">Peaks</div>
        <div className="menu-item">Volcano</div>
      </div>
    </nav>
  );
};

export default Menu;
