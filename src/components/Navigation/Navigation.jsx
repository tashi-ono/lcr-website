import React from "react";
import { NavLink } from "react-router-dom";
// import { Nav, Container, Navbar } from "react-bootstrap";
import "./style.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/services">SERVICES</NavLink>
      <NavLink to="/covid">COVID-19</NavLink>
      <NavLink to="about">ABOUT US</NavLink>
      <NavLink to="recycling">RECYCLING</NavLink>
      <NavLink to="careers">CAREERS</NavLink>
      <NavLink to="contact">CONTACT</NavLink>
    </nav>
  );
};

export default Navigation;
