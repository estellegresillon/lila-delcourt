import React from "react";
import { Link } from "react-router-dom";

import { useComponentVisible } from "../../../hooks/useComponentVisible";
import Menu from "../menu";
import "./header.scss";
import "./header-mobile.scss";

const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible, willDisappear } = useComponentVisible(false, 1000);

  return (
    <header>
      <Link to="/">
        <div className="logo-link">
          RD
        </div>
      </Link>

      <div className="center-menu">
        <div className="center-menu-item">About</div>
        <div className="center-menu-item">Contact</div>
      </div>

      <div className="menu-item galery-link" onClick={() => setIsComponentVisible(true)}>
        Menu
        <div className="underline" />
      </div>
      {isComponentVisible &&
        <>
          <Menu 
            setIsComponentVisible={setIsComponentVisible}
            willDisappear={willDisappear}
            visibleRef={ref} />
          <div className="menu-overlay" />
        </>}
    </header>
  );
};

export default Header;
