import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import "./style.css";

const MapMarker = ({ location }) => {
  const [openInfoWindow, setOpenInfoWindow] = useState(true);

  const handleInfoWindow = () => {
    setOpenInfoWindow(!openInfoWindow);
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
              lat: location.lat,
              lng: location.lng,
            }}
            options={{ pixelOffset: (-30, 0) }}
            zIndex={1}
          >
            <div className="info-box">
              <h4>SONOMA COUNTY OFFICE</h4>
              <p>
                1097 Jacobsen Ln. <br />
                Petaluma, CA 94954
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
