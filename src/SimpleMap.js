import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function SimpleMap() {
  const [position, setPosition] = React.useState([-12, -77]);

  React.useEffect(() => {
    navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch();
    };
  }, [setPosition]);

  const map = (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          You are here!
          <span role="img" aria-label="emoji dot position">
            📍
          </span>
        </Popup>
      </Marker>
    </Map>
  );

  return map;
}

export default SimpleMap;
