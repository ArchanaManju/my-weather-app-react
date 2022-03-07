import React from "react";
import axios from "axios";

import { Rings } from "react-loader-spinner";
import "./weather.css";
export default function Weather(props) {
  const api_key = "2b354ee10180a8ec5f31e475798a3953";
  function handleResponse(response) {
    alert(`Temp is :${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api_key}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div>
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <form id="search-form" class="mb-3">
              <div class="row">
                <div class="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div class="overview">
              <h1 id="city"></h1>
              <ul>
                <li>
                  Last updated: <span id="date"></span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="clearfix weather-temperature">
                  <img src="" alt="Clear" id="icon" class="float-left" />
                  <div class="float-left">
                    <strong id="temperature"></strong>
                    <span class="units" />
                    <a href="#" id="celsius-link" class="active">
                      °C
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/ArchanaManju/vanilla-WeatherApp-week8"
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
}
