import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./style.css";

const Recycling = () => {
  return (
    <div id="recycling-page">
      <Header />
      <PageTitle title="RECYCLING" color="#196537" />
      <div id="background-pic-container"> 
      <img id="earth-pic" src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1648443687/lcr_website/Recycling_Earth_e1ru1b.png" alt="earth pic" width="200px" />
      <img id="recycle-icon" src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1648439676/lcr_website/Recycling_Symbol_f3jx9h.png" alt="recycling symbol" width="200px" />
        <div id="recycling-paragraph">
          <p>
            Recognizing our greater surroundings in the world we work in is a
            principle we believe in.
          </p>
          <p>
            As a local company we still recognize the impact our work may have on
            a greater scale.
          </p>
          <p>
            We are committed to do our part and comply with county and state
            regulations to reduce waste and pollution.
          </p>
        </div>
        <div id="resource-links">
          <p>BAY AREA RECYCLING RESOURCE CENTERS</p>
          <a href="https://www.marinresourcerecoverycenter.com">MARIN</a>
          <a href="https://www.recology.com">SAN FRANCISCO</a>
          <a href="https://www.contracosta.ca.gov/4911/Recycling">
            CONTRA COSTA COUNTY
          </a>
        </div>
        <div id="county-links">
          <a href="https://www.recology.com/recology-san-mateo-county/">
            SAN MATEO COUNTY
          </a>
          <a href="https://www.santaclaraca.gov/our-city/departments-g-z/public-works/environmental-programs/residential-garbage-recycling">
            SANTA CLARA COUNTY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recycling;
