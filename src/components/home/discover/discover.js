import React from "react";
import { useComponentVisible } from "../../../hooks/useComponentVisible";

import Menu from "../../common/menu";

const Discover = () => {
  const { ref, isComponentVisible, setIsComponentVisible, willDisappear } = useComponentVisible(false, 1000);

  return (
    <div className="parallax second">
      <button className="btn-contact" onClick={() => setIsComponentVisible(true)}>
        <span>Discover my work</span>
        <div className="btn-background" />
      </button>
      {isComponentVisible &&
        <div className="menu-wrapper">
          <Menu 
            setIsComponentVisible={setIsComponentVisible}
            willDisappear={willDisappear}
            visibleRef={ref} />
          <div className="menu-overlay" />
        </div>}
    </div>
  );
};

export default Discover;
