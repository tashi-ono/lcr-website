import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./Careers.css";

const Careers = () => {
  return (
    <div id="careers-page">
      <Header />
      <PageTitle title="CAREERS" color="#542000" />
      <h3>Join our team of qualified professionals and subcontractors</h3>
      <ul>
        <li>Carpenters</li>
        <li>Office Management</li>
        <li>Accountant</li>
        <li>Bookkeeper</li>
        <li>Competitive compensation</li>
        <li>Capable and competent work force</li>
        <li>Subcontractors</li>
        <li>Licensed Plumbers</li>
        <li>Licensed Electricians</li>
        <li>HVAC</li>
        <li>Drywall</li>
        <li>Demolition</li>
      </ul>
    </div>
  );
};

export default Careers;
