import React, { useState } from "react";
import MobileNav from "../MobileNav/MobileNav.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  let showNavMenu = null;
  if (mobileNavOpen || window.innerWidth > 750) {
    showNavMenu = <Navigation />;
  }

  return (
    <>
      <Logo />
      <MobileNav handleMobileNav={handleMobileNav} />
      {showNavMenu}
    </>
  );
};

export default Header;
