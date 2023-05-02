import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import React, { useState, useEffect } from "react";


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
      </div>
    </div>
  );
}

export default App;
