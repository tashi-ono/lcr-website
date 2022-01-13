import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import "./Header.css";

const Header = (props) => {
  const divStyle = {
    backgroundColor: props.color,
  };

  const spanStyle = {
    color: props.color,
  };

  return (
    <>
      <Logo />
      <Nav />
      <div className="page-header" style={divStyle}>
        <span style={spanStyle}>{props.title}</span>
      </div>
    </>
  );
};

export default Header;
