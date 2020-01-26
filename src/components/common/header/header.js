import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import "./header-mobile.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo-link">
          RD
        </div>
      </Link>

      <div className="menu-item galery-link">
        Menu
        <div className="underline" />
      </div>
    </header>
  );
};

export default Header;
