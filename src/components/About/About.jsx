import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./style.css";

const About = () => {
  return (
    <div id="about-page">
      <Header />
      <PageTitle title="ABOUT US" color="#3D4D43" />
      <div className="about-title">
        <p id="title1">A LOCAL COMPANY</p>
        <p id="title2">A MORE RESPONSIVE COMPANY</p>
      </div>
      <div className="worker-imgs">
        <img
          id="office-manager"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563108/lcr_website/Office_Manager_with_Border_w1dz2y.png"
          alt="office manager"
          width="300px"
        />
        <img
          id="work-force"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563102/lcr_website/Happy_Work_Force_with_Border_ycpuuq.png"
          alt="work force"
          width="300px"
        />
      </div>
      <p className="about-paragraph" id="about-p1">
        SINCE 2008, WE HAVE SERVED THE GREATER BAY AREA AND ITS SURROUNDING
        COMMUNITIES.
      </p>
      <p className="about-paragraph" id="about-p2">
        WE SPECIALIZE IN COMMERCIAL REMODELING BOTH INTERIOR AND EXTERIOR,
        RETAIL LOCATION, AND REGULATORY COMPLIANCE WITH LOCAL JURISDICTIONS.
      </p>
      <div className="leased">
        <img
          id="nc-badge"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563087/lcr_website/North_Coast_Builders_Exchange_kicswb.png"
          alt="North Coast Builders Exchange Badge"
        />
        <img
          id="marin-badge"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563081/lcr_website/Marin_Builders_Badge_k83d3s.png"
          alt="Marin Builders Badge"
        />
      </div>
    </div>
  );
};

export default About;
