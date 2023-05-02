import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';
import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

function App() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFlats(data)
      })
  });

  const center = {
    lat: 48.8566,
    lng: 2.3522
  }

  return (
    <div className="app">
      <div className="main">
        <div className="search">
        </div>
        <div className="flats">
          {flats.map((flat) => {
            return <Flat flat={flat} />
          })}
        </div>
      </div>
      <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCg-GG7J_C2Z9icVwXucaguJYDb8Va-kSI' }}
            center= {center}
            defaultZoom= {11}
            >
              {flats.map((flat) => {
            return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} />
          })}
            </GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
