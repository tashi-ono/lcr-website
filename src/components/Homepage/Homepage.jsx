import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <div id="homepage-container">
        <div id="homepage-pic"></div>
        <div id="background-container">
          <h3 id="strategy">STRATEGY</h3>
          <h3 id="execution">EXECUTION</h3>
          <h3 id="compliance">COMPLIANCE</h3>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
