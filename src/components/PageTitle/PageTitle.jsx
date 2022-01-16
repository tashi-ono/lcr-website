import React from "react";

import "./PageTitle.css";

const PageTitle = (props) => {
  const divStyle = {
    backgroundColor: props.color,
  };

  const spanStyle = {
    color: props.color,
  };

  return (
    <>
      <div className="page-header" style={divStyle}>
        <span style={spanStyle}>{props.title}</span>
      </div>
    </>
  );
};

export default PageTitle;
