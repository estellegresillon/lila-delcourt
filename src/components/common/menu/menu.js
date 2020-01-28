import React, { useState } from "react";

import "./menu.scss";

const Menu = ({ visibleRef, willDisappear, setIsComponentVisible }) => {
  const [willClose, setWillClose] = useState(false);

  const handleClose = () => {
    setWillClose(true);
    setTimeout(() => {
      setIsComponentVisible(false);
    }, 1000);
  };

  const navigateToProject = project => {
    handleClose();
    setTimeout(() => {
      window.location.assign(project);
    }, 1000);
  }

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
        <div className="list-menu-item">Nature</div>
        <div className="list-menu-item" onClick={() => navigateToProject("/wild-west")}>Wildlife</div>
        <div className="list-menu-item">Peaks</div>
        <div className="list-menu-item">Volcano</div>
      </div>
    </nav>
  );
};

export default Menu;
