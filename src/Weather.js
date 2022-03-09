import React, { useState } from "react";
import axios from "axios";

import { Rings } from "react-loader-spinner";
import "./weather.css";
export default function Weather(props) {
  const api_key = "2b354ee10180a8ec5f31e475798a3953";
  let [city, setCity] = useState();
  let [loaded, setLoaded] = useState(false);
  let [weather, setweather] = useState({});
  function updateCity(event) {
    setCity(event.target.value);
  }
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
  function handleResponse(response) {
    setLoaded(true);
    setweather({
      temperature: response.data.main.temp,
      humdity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      updateDate: formatDate(response.data.dt * 1000),
    });
  }
  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    console.log(axios.get(url));
    axios.get(url).then(handleResponse);
  }
  let searchBox = (
    <input type="text" onChange={updateCity} placeholder="enter city name" />
  );
  let action = (
    <>
      <input type="submit" value="search"></input>
      <p>{handleResponse}</p>
    </>
  );

  if (loaded) {
    return (
      <div>
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" className="mb-3" onSubmit={handleSearch}>
                <div className="row">
                  <div className="col-9">{searchBox}</div>
                  <div className="col-3">{action}</div>
                </div>
              </form>
              <div className="overview">
                <h1 id="city"></h1>
                <ul>
                  <li>Last updated: {weather.updateDate}</li>
                  <li id="description"></li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                    <img
                      src={weather.icon}
                      alt="Clear"
                      id="icon"
                      className="float-left"
                    />
                    <div className="float-left">
                      <strong id="temperature">{weather.temperature}</strong>
                      <span className="units"></span>
                      <a href="#" id="celsius-link" className="active">
                        °C
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Humidity: {weather.humdity} %</li>
                    <li>Wind: {weather.wind} km/hr</li>
                  </ul>
                </div>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
            <small>
              <a
                href="https://github.com/ArchanaManju/my-weather-app-react"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              by Archana Manju
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSearch}>
          {searchBox}
          {action}
        </form>
        <Rings color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
