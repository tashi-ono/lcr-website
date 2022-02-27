import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header.jsx";
import PageTitle from "../PageTitle/PageTitle.jsx";
import "./Services.css";

const Services = () => {
  return (
    <div id="services-page">
      <Header />
      <PageTitle title="SERVICES" color="#448BCA" />
      <div id="services-container">
        <div id="services-p-border">
          <p>
            WORK WITH OUR EFFICIENT TEAM AND PARTNERING SUBCONTRACTORS <br />{" "}
            FOR ALL OF YOUR COMMERICAL REMODELING NEEDS
          </p>
        </div>
        <div className="services-pics" id="health-care">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877412/lcr_website/Services_Health_Care_hzaoax.png"
              alt="Health Care"
            />
            <p>HEALTH CARE</p>
          </NavLink>
        </div>
        <div className="services-pics" id="steel-frame">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877417/lcr_website/Services_Steel_Framing_knpczh.png"
              alt="Steel framing pic"
            />
            <p>
              STEEL <br />
              FRAMING
            </p>
          </NavLink>
        </div>

        <div className="services-pics" id="drywall">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877412/lcr_website/Services_Drywall_bhasuh.png"
              alt="Dry Wall"
            />
            <p>DRY WALL</p>
          </NavLink>
        </div>
        <div className="services-pics" id="insulation">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877416/lcr_website/Services_Insulation_qg2by9.png"
              alt="Insulation"
            />
            <p>INSULATION</p>
          </NavLink>
        </div>
        <div className="services-pics" id="demolition">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877412/lcr_website/Services_Demolition_pqax9m.png"
              alt="Demolition"
            />
            <p>DEMOLITION</p>
          </NavLink>
        </div>
        <div className="services-pics" id="exteriors">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877412/lcr_website/Services_Exterior_rjjcec.png"
              alt="Exteriors"
            />
            <p>EXTERIORS</p>
          </NavLink>
        </div>
        <div className="services-pics" id="improvement">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877419/lcr_website/Services_Tenant_Improvement_bffvgo.png"
              alt="Tenant Improvement"
            />
            <p>
              TENANT <br />
              IMPROVEMENT
            </p>
          </NavLink>
        </div>
        <div className="services-pics" id="relocation">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877415/lcr_website/Services_Tenant_Relocation_woxapi.png"
              alt="Tenant Relocatioin"
            />
            <p>
              TENANT <br />
              RELOCATION
            </p>
          </NavLink>
        </div>
        <div className="services-pics" id="shells">
          <NavLink to="/contact">
            <img
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1641877416/lcr_website/Services_Cold_Warm_Shell_arp7pd.png"
              alt="Cold Shell, Warm Shell"
            />
            <p>
              COLD SHELL
              <br />
              <br />
              WARM SHELL
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
