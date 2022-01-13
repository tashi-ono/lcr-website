import React from "react";
import "./Footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer">
      <p>Copyright &copy; {getCurrentYear()} - LCR Commercial Construction</p>
    </div>
  );
};

export default Footer;
