import React from "react";
import "./MobileNav.css";

const MobileNav = ({ handleMobileNav }) => {
  return (
    <button id="mobile-nav" onClick={handleMobileNav}>
      <img
        src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1642362738/Luke%27s%20Website/tools-icon_ipnaz8.png"
        alt="wrench icons"
        width="44px"
      />
    </button>
  );
};

export default MobileNav;
