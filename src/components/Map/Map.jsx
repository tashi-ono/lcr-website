import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarker from "../MapMarker/MapMarker";
import "./style.css";

const containerStyle = {
  border: "25px solid #f1793d",
  borderRadius: "15px",
  height: "100%",
  width: "100%",
};

const center = {
  lat: 38.368738,
  lng: -122.680637,
};
 
const location = {
  lat: 38.300269613598644,
  lng: -122.64557402904028,
};

const Map = () => (
  <div className="map-border">
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        clickableIcons={false}
        zoom={9}
      >
        <MapMarker location={location} />
      </GoogleMap>
    </LoadScript>
  </div>
);

export default Map;
