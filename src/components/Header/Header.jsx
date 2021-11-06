import React from "react";
import HamburgerNav from "../HamburgerNav/HamburgerNav";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div id="header-title">
      <h1>Commercial</h1>
      <NavLink id="company-logo" to="/">
        <span id="l-logo">L</span>
        <span id="c-logo">C</span>
        <span>R</span>
      </NavLink>
      <h1>Construction</h1>
      <HamburgerNav />
    </div>
  );
};

export default Header;
