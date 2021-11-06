import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <NavLink id="company-logo" to="/">
      <span id="l-logo">L</span>
      <span>C</span>
      <span>R</span>
    </NavLink>
  );
};

export default Logo;
