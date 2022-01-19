import React from "react";
import "./MobileNav.css";

const MobileNav = ({ handleMobileNav }) => {
  return (
    <button id="mobile-nav" onClick={handleMobileNav}>
      <h3>Menu</h3>
    </button>
  );
};

export default MobileNav;
