import React from "react";
import { Icon } from "@iconify/react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="mdi:map-marker" color="#e74133" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
