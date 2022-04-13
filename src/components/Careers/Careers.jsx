import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./style.css";

const Careers = () => {
  return (
    <div id="careers-page">
      <Header />
      <PageTitle title="CAREERS" color="#542000" />
      <div className="careers-pics">
        <img id="careers-montage" src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1649733420/lcr_website/Careers_Montage_ndkemk.png" alt="careers montage" />
        <img id="sunset-bldg" src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1649733440/lcr_website/sunset_bldg_zdgzug.png" alt="sunset building" />
      </div>
      <div id="join-text"><p>Join our team of qualified professionals and subcontractors</p></div>
      <div id="career-list">
        <p>Carpenters</p>
        <p>Subcontractors</p>
        <p>Office Management</p>
        <p>Licensed Plumbers</p>
        <p>Accountant</p>
        <p>Licensed Electricians</p>
        <p>Bookkeeper</p>
        <p>HVAC</p>
        <p>Drywall</p>
        <p>Demolition</p>
        <p>Competitive compensation</p>
        <p>Capable and competent work force</p>
      </div>

    </div>
  );
};

export default Careers;
