import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import "./MapMarker.css";

const MapMarker = ({ location }) => {
  const [openInfoWindow, setOpenInfoWindow] = useState(true);

  const handleInfoWindow = () => {
    setOpenInfoWindow(true);
    console.log("handle clickssss");
  };

  return (
    <div className="map-marker">
      <Marker
        position={{
          lat: location.lat,
          lng: location.lng,
        }}
        onClick={handleInfoWindow}
        visible
      >
        {openInfoWindow && (
          <InfoWindow
            anchor={location}
            position={{
              lat: location.lat + 0.1,
              lng: location.lng,
            }}
            zIndex={1}
          >
            <div className="info-box">
              <h4>SAN FRANCISCO OFFICE</h4>
              <p>
                2186 California Street, Ste. 8 <br />
                San Francisco, CA 94115
              </p>
              <p>415.596.6853</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </div>
  );
};

export default MapMarker;
