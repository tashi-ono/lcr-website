import React from "react";
import Header from "../Header/Header";
import "./Covid.css";

const Covid = () => {
  return (
    <div id="covid-page">
      <Header title="COVID-19" color="#9E0B0F" />
      <p>
        THE SAFETY OF OUR EMPLOYEES, CLIENTS, AND THE GENERAL PUBLIC IS
        PARAMOUNT TO OUR WORK EFFORT <br /> AS WE ALL CONTINUE TO PERSEVERE
        THROUGH THE COVID-19 PANDEMIC.
      </p>
      <p>
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
      <p>
        OUR COMPANY OPERATES IN STRICT ACCORDANCE WITH LOCAL AND ANTIONAL HEALTH
        ORDERS. <br />
        FOR MORE INFORMATION ON LOCAL BAY AREA HEALTH ORDERS, SEE LINKS BELOW.
      </p>

      <div>
        <a href="https://coronavirus.marinhhs.org/">Marin County</a>
        <a href="https://www.sfdph.org/dph/alerts/coronavirus-healthorders.asp">
          San Francisco County
        </a>
        <a href="https://www.coronavirus.cchealth.org/health-orders">
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
