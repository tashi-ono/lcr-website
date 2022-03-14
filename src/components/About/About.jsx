import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./style.css";

const About = () => {
  return (
    <div id="about-page">
      <Header />
      <PageTitle title="ABOUT US" color="#3D4D43" />

      <p id="about-title1">A LOCAL COMPANY</p>
      <p id="about-title2">A MORE RESPONSIVE COMPANY</p>
      <img
        src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563108/lcr_website/Office_Manager_with_Border_w1dz2y.png"
        alt="office manager"
        width="300px"
      />
      <img
        src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563102/lcr_website/Happy_Work_Force_with_Border_ycpuuq.png"
        alt="work force"
        width="300px"
      />
      <div id="leased">
        <p id="about-p1">
          SINCE 2008, WE HAVE SERVED THE GREATER BAY <br /> AREA AND ITS
          SURROUNDING COMMUNITIES.
        </p>
        <p id="about-p2">
          WE SPECIALIZE IN COMMERCIAL REMODELING BOTH INTERIOR AND EXTERIOR,
          RETAIL LOCATION, AND REGULATORY COMPLIANCE WITH LOCAL JURISDICTIONS.
        </p>
        <div className="about-pics" id="office-worker"></div>
        <div className="about-pics" id="workers"></div>
      </div>
    </div>
  );
};

export default About;
