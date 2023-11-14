import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../Header/Header";
import "./style.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <div id="homepage-container">
        <ScrollAnimation
          delay={100}
          animateIn="fadeIn"
          duration={3}
          animateOnce={true}
          offset={50}
        >
          <div id="homepage-pic"></div>
        </ScrollAnimation>
        <div id="background-container">
          <ScrollAnimation
            delay={200}
            animateIn="fadeIn"
            duration={3}
            animateOnce={true}
          >
            <h3 id="strategy">STRATEGY</h3>
          </ScrollAnimation>
          <ScrollAnimation
            delay={400}
            animateIn="fadeIn"
            duration={3}
            animateOnce={true}
          >
            <h3 id="execution">EXECUTION</h3>
          </ScrollAnimation>
          <ScrollAnimation
            delay={600}
            animateIn="fadeIn"
            duration={3}
            animateOnce={true}
          >
            <h3 id="compliance">COMPLIANCE</h3>
          </ScrollAnimation>
          <ScrollAnimation
            delay={800}
            animateIn="fadeIn"
            duration={3}
            animateOnce={true}
            offset={25}
          >
            {/* <img
              id="marin-badge"
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563081/lcr_website/Marin_Builders_Badge_k83d3s.png"
              alt="Marin Builders Badge"
            /> */}
          </ScrollAnimation>
          <ScrollAnimation
            delay={1000}
            animateIn="fadeIn"
            duration={3}
            animateOnce={true}
            offset={25}
          >
            {/* <img
              id="nc-badge"
              src="https://res.cloudinary.com/tca7lsohuid8/image/upload/v1642563087/lcr_website/North_Coast_Builders_Exchange_kicswb.png"
              alt="North Coast Builders Exchange Badge"
            /> */}
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Homepage;
