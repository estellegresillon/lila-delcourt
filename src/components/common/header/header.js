import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useComponentVisible } from "../../../hooks/useComponentVisible";
import Menu from "../menu";
import "./header.scss";
import "./header-mobile.scss";

const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible, willDisappear } = useComponentVisible(false, 1000);
  const [centerCategory, setCenterCategory] = useState("");
  const [centerLink, setCenterLink] = useState("");
  const page = window.location.pathname.substr(1);

  const updateLink = page => {
    if (page !== "contact") {
      setCenterCategory("go back home");
      setCenterLink("");
    } else {
      setCenterCategory("contact");
      setCenterLink("/contact");
    }
  }

  const renderLink = page => {
    if (page === "contact") {
      setCenterCategory("go back home");
      setCenterLink("");
    } else {
      setCenterCategory("contact");
      setCenterLink("/contact");
    }
  }

  useEffect(() => {
    renderLink(page);
  }, [page])

  return (
    <header>
      <Link to="/">
        <div className="logo-link">
          RB
        </div>
      </Link>

      <div className="center-menu">
        <div onClick={() => updateLink(page)} className="menu-item center-menu-item">
          <Link to={centerLink}>
            {centerCategory}
          </Link>
          <div className="underline" />
        </div>
      </div>

      <div className="menu-item galery-link" onClick={() => setIsComponentVisible(true)}>
        Menu
        <div className="underline" />
      </div>
      {isComponentVisible &&
        <div className="menu-wrapper">
          <Menu 
            setIsComponentVisible={setIsComponentVisible}
            willDisappear={willDisappear}
            visibleRef={ref} />
          <div className="menu-overlay" />
        </div>}
    </header>
  );
};

export default Header;
