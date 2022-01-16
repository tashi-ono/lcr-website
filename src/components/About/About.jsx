import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./About.css";

const About = () => {
  return (
    <div id="about-page">
      <Header />
      <PageTitle title="ABOUT US" color="#3D4D43" />
      <div id="leased"></div>
      <h3>A LOCAL COMPANY</h3>
      <h3>A MORE RESPONSIVE COMPANY</h3>
      <p id="about-p1">
        SINCE 2008, WE HAVE SERVED THE GREATER BAY <br /> AREA AND ITS
        SURROUNDING COMMUNITIES.
      </p>
      <p id="about-p2">
        WE SPECIALIZE IN COMMERCIAL REMODELING <br /> BOTH INTERIOR AND
        EXTERIOR, RETAIL LOCATION, <br /> AND REGULATORY COMPLIANCE WITH LOCAL
        <br />
        JURISDICTIONS.
      </p>
      <div className="about-pics" id="office-worker"></div>
      <div className="about-pics" id="workers"></div>
    </div>
  );
};

export default About;
