import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div id="homepage-container">
      <Logo />
      <Nav />
      <div id="homepage-pic">
        <h3 id="strategy">STRATEGY</h3>
        <h3 id="execution">EXECUTION</h3>
        <h3 id="compliance">COMPLIANCE</h3>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Homepage;
