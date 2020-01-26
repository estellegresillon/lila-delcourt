import React from "react";
import { useComponentVisible } from "../../../hooks/useComponentVisible";

import Menu from "../../common/menu";

const ContactButton = () => {
  const { ref, isComponentVisible, setIsComponentVisible, willDisappear } = useComponentVisible(false, 1000);

  return (
    <div className="parallax second">
      <button className="btn-contact" onClick={() => setIsComponentVisible(true)}>
        <span>Discover my work</span>
        <div className="btn-background" />
      </button>
      {isComponentVisible &&
        <>
          <Menu 
            setIsComponentVisible={setIsComponentVisible}
            willDisappear={willDisappear}
            visibleRef={ref} />
          <div className="menu-overlay" />
        </>}
    </div>
  );
};

export default ContactButton;
