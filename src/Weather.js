import react from "react";
import "./Weather.css";
import axios from "axios";
import { Bars } from "react-loader-spinner";

export default function Weather() {
  let weatherData = {
    city: "Tehran",
    temperature: 14,
    farenheitTemp: 20,
    feelsTemp: 12,
    feelsTempf: 18,
    date: "Tuesday 02:00",
    description: "sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 10,
    wind: 0,
  };
  return (
    <div className="Weather">
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-md-5">
              <h1 className="city"> {weatherData.city}</h1>
            </div>
            <div className="col-md-5">
              <input
                type="search"
                placeholder="🔎 Type a city..."
                autoComplete="off"
                className="form-control shadow-sm"
              />
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
          </div>
        </form>

        <ul className="date-time">
          <li>
            Last updated: <span>{weatherData.date}</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix">
            <div className="float-left">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="description"
                className="current-icon"
              />
              <li className="description">{weatherData.description}</li>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="temperature-description">
            <li className="temperature">
              <h1>
                <span></span>
                <span className="degrees">
                  <a href="#" className="active">
                    {weatherData.temperature} °C|
                  </a>
                  <a href="#">{weatherData.farenheitTemp}°F</a>
                </span>
              </h1>
            </li>
            <li>
              feels like:
              <span className="feels-degrees">
                <a href="#" className="feels-active">
                  {weatherData.feelsTemp} °C|{" "}
                </a>
                <a href="#">{weatherData.feelsTempf}°F</a>
              </span>
            </li>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
