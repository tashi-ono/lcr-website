import React from "react";
import { NavLink } from "react-router-dom";
// import { Nav, Container, Navbar } from "react-bootstrap";
import "./Navigation.css";

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
    // <>
    //   <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav>
    //           <Nav.Link to="/services">SERVICES</Nav.Link>
    //           <Nav.Link to="/covid">COVID-19</Nav.Link>
    //           <Nav.Link to="about">ABOUT US</Nav.Link>
    //           <Nav.Link to="recycling">RECYCLING</Nav.Link>
    //           <Nav.Link to="careers">CAREERS</Nav.Link>
    //           <Nav.Link to="contact">CONTACT</Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>
  );
};

export default Navigation;
