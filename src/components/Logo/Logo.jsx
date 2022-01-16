import React from "react";
// import MobileNav from "../MobileNav/MobileNav";
import { NavLink } from "react-router-dom";

import "./Logo.css";

const Logo = () => {
  return (
    <div id="logo">
      <NavLink to="/">
        <img
          src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641523628/Luke%27s%20Website/Logo_poogxo.jpg"
          alt="LCR Commercial Construction Logo"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
