import React from "react";
// import MobileNav from "../MobileNav/MobileNav";
import { NavLink } from "react-router-dom";

import "./style.css";

const Logo = () => {
  return (
    <div id="logo">
      <NavLink to="/">
        <img
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641523628/lcr_website/Logo_poogxo.jpg"
          alt="LCR Commercial Construction Logo"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
