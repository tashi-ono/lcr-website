import React, { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
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
