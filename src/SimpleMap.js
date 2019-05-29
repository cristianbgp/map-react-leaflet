import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class SimpleMap extends Component {
  state = {
    lat: -12.0757427,
    lng: -77.0573508,
    zoom: 13
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
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
  }
}

export default SimpleMap;
