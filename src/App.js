import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';
import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

function App() {
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [search, setSearch] = useState('');


  useEffect(() => {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFlats(data)
      })
  });

  let center = {
    lat: 48.8566,
    lng: 2.3522
  }

  if (selectedFlat) {
    center = {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    }
  }

  const selectFlat = (flat) => {
    setSelectedFlat(flat)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFlats(flats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name)))
  }

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
        </div>
        <div className="flats">
        {flats.filter((flat) => new RegExp(search, "i").exec(flat.name)).map((flat) => {
            return <Flat
              key={flat.name}
              flat={flat}
              selectFlat={selectFlat} />
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
            return <Marker
              key={flat.name}
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
              selected={flat === selectedFlat} />
          })}
            </GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
