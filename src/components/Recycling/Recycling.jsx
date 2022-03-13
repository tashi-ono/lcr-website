import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./style.css";

const Recycling = () => {
  return (
    <div id="recycling-page">
      <Header />
      <PageTitle title="RECYCLING" color="#196537" />
      <div>
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
      <div>
        <p>BAY AREA RECYCLING RESOURCE CENTERS</p>
        <a href="https://www.marinresourcerecoverycenter.com">MARIN</a>
        <a href="https://www.recology.com">SAN FRANCISCO</a>
        <a href="https://www.contracosta.ca.gov/4911/Recycling">
          CONTRA COSTA COUNTY
        </a>
      </div>
      <div>
        <a href="https://www.recology.com/recology-san-mateo-county/">
          SAN MATEO COUNTY
        </a>
        <a href="https://www.santaclaraca.gov/our-city/departments-g-z/public-works/environmental-programs/residential-garbage-recycling">
          SANTA CLARA COUNTY
        </a>
      </div>
    </div>
  );
};

export default Recycling;
