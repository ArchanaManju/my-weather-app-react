import React from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  const api_key = "2b354ee10180a8ec5f31e475798a3953";
  function handleResponse(response) {
    alert(`Temp is :${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api_key}&units=metric`;
  axios.get(url).then(handleResponse);
  return <Rings color="#00BFFF" height={80} width={80} />;
}
