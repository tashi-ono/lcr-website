import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import "./Services.css";

const Services = () => {
  return (
    <div id="services-page">
      <Header title="SERVICES" color="#448BCA" />
      <div id="services-border">
        <p>
          WORK WITH OUR EFFICIENT TEAM AND PARTNERING SUBCONTRACTORS <br /> FOR
          ALL OF YOUR COMMERICAL REMODELING NEEDS
        </p>
      </div>
      <div className="services-pics" id="steel-frame">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877417/Luke%27s%20Website/Services_Steel_Framing_knpczh.png"
            alt="Steel framing pic"
            width="200px"
          />
          <p>
            STEEL <br />
            FRAMING
          </p>
        </NavLink>
      </div>
      <div className="services-pics" id="health-care">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877412/Luke%27s%20Website/Services_Health_Care_hzaoax.png"
            alt="Health Care"
            width="200px"
          />
          <p>HEALTH CARE</p>
        </NavLink>
      </div>
      <div className="services-pics" id="drywall">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877412/Luke%27s%20Website/Services_Drywall_bhasuh.png"
            alt="Dry Wall"
            width="225px"
          />
          <p>DRY WALL</p>
        </NavLink>
      </div>
      <div className="services-pics" id="insulation">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877416/Luke%27s%20Website/Services_Insulation_qg2by9.png"
            alt="Insulation"
            width="225px"
          />
          <p>INSULATION</p>
        </NavLink>
      </div>
      <div className="services-pics" id="demolition">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877412/Luke%27s%20Website/Services_Demolition_pqax9m.png"
            alt="Demolition"
            width="225px"
          />
          <p>DEMOLITION</p>
        </NavLink>
      </div>
      <div className="services-pics" id="exteriors">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877412/Luke%27s%20Website/Services_Exterior_rjjcec.png"
            alt="Exteriors"
            width="225px"
          />
          <p>EXTERIORS</p>
        </NavLink>
      </div>
      <div className="services-pics" id="improvement">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877419/Luke%27s%20Website/Services_Tenant_Improvement_bffvgo.png"
            alt="Tenant Improvement"
            width="275px"
          />
          <p>
            TENANT <br />
            IMPROVEMENT
          </p>
        </NavLink>
      </div>
      <div className="services-pics" id="shells">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877416/Luke%27s%20Website/Services_Cold_Warm_Shell_arp7pd.png"
            alt="Cold Shell, Warm Shell"
            width="275px"
          />
          <p>
            COLD SHELL
            <br />
            <br />
            WARM SHELL
          </p>
        </NavLink>
      </div>
      <div className="services-pics" id="relocation">
        <NavLink to="/contact">
          <img
            src="https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1641877415/Luke%27s%20Website/Services_Tenant_Relocation_woxapi.png"
            alt="Tenant Relocatioin"
            width="225px"
          />
          <p>
            TENANT <br />
            RELOCATION
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Services;
