import React from "react";
import HamburgerNav from "../HamburgerNav/HamburgerNav";
import Logo from "../Logo/Logo";

import "./Header.css";

const Header = () => {
  return (
    <div id="header-title">
      <div id="mobile-logo">
        <Logo />
      </div>
      <h1>Commercial</h1>
      <span id="desktop-logo">
        <Logo />
      </span>
      <h1>Construction</h1>
      <HamburgerNav />
    </div>
  );
};

export default Header;
