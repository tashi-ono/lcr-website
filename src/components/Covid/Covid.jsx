import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import "./style.css";

const Covid = () => {
  return (
    <div id="covid-page">
      <Header />
      <PageTitle title="COVID-19" color="#9E0B0F" />
      <p id="covid-p1">
        THE SAFETY OF OUR EMPLOYEES, CLIENTS, AND THE GENERAL PUBLIC IS
        PARAMOUNT TO OUR WORK EFFORT <br /> AS WE ALL CONTINUE TO PERSEVERE
        THROUGH THE COVID-19 PANDEMIC.
      </p>
      <div id="covid-imgs">
        <img
          id="construction"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642052808/lcr_website/Covid_19_Construction_f940aa.png"
          alt="Construction"
          width="21%"
        />
        <img
          id="electrical"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642052810/lcr_website/Covid_19_Electrical_w3rqpq.png"
          alt="Electrical"
          width="20%"
        />

        <img
          id="lumber"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642052809/lcr_website/Covid_19_Lumber_ammtim.png"
          alt="Lumber"
          width="25%"
        />
        <img
          id="metal"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642052811/lcr_website/Covid_19_Metal_Supplies_np5adf.png"
          alt="Metal Supplies"
          width="25%"
        />
        <img
          id="distancing"
          src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642052803/lcr_website/Covid_19_Distancing_ru9ouv.png"
          alt="Distancing"
          width="22%"
        />
      </div>
      <p id="covid-p2">
        THE CONSTRUCTION INDUSTRY HAS EXPERIENCED VERY SIGNIFICANT CHALLENGES
        RELATED TO RAW MATERIAL AVAILABILITY AND INFLATION. <br />
        COSTS FOR TRANSPORTATION, LABOR, AND FREIGHT ALSO CONTINUE TO ESCALATE
        RAPIDLY. <br />
        MATERIAL SHORTAGES OF WOOD AND METAL HAVE RESULTED IN DELAYS AND
        ELEVATED COSTS IN CONSTRUCTION SUPPLIES. <br />
        AT <span>LCR</span>, WE REMAIN FOCUSED ON PROVIDING OUR CLIENTS WITH THE
        PRODUCTS AND SERVICES THEY NEED. <br />
        <span>LCR</span> CONTINUES TO WORK WITH OUR VENDORS AND SUPPLIERS TO GET
        ACCURATE LEAD TIMES AND PRICING ON MATERIALS <br />
        TO ENSURE PUNCTUAL PROJECT TIMELINES AND CONCISE PROPOSALS.
      </p>
      <p id="covid-p3">
        OUR COMPANY OPERATES IN STRICT ACCORDANCE WITH LOCAL AND NATIONAL HEALTH
        ORDERS. <br />
        FOR MORE INFORMATION ON LOCAL BAY AREA HEALTH ORDERS, SEE LINKS BELOW.
      </p>

      <div id="covid-links">
        <a href="https://coronavirus.marinhhs.org/">Marin County</a>
        <a href="https://www.sfdph.org/dph/alerts/coronavirus-healthorders.asp">
          San Francisco County
        </a>

        <a href="https://www.cchealth.org/health-and-safety-information/orders-and-regulations/health-orders">
          Contra Costa County
        </a>
        <a href="https://www.smchealth.org/coronavirus">San Mateo County</a>
        <a href="https://www.santaclaraca.gov/i-want-to/stay-informed/coronavirus-updates/county-and-state-public-health-orders">
          Santa Clara County
        </a>
      </div>
    </div>
  );
};

export default Covid;
