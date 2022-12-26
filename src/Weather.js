import react, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { Bars } from "react-loader-spinner";

export default function Weather() {
  let weatherData = {
    farenheitTemp: 20,
    feelsTempf: 18,
    date: "Tuesday 02:00",
  };
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      feelsTemp: response.data.main.feels_like,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="Weather">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-5">
                <h1 className="city"> {weather.city}</h1>
              </div>
              <div className="col-md-5">
                <input
                  type="search"
                  placeholder="🔎 Type a city..."
                  autoComplete="off"
                  className="form-control shadow-sm"
                  onChange={updateCity}
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
                  src={weather.icon}
                  alt={weather.description}
                  className="current-icon"
                />
                <li className="description">{weather.description}</li>
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
                      {Math.round(weather.temperature)} °C|
                    </a>
                    <a href="#">{weatherData.farenheitTemp}°F</a>
                  </span>
                </h1>
              </li>
              <li>
                feels like:
                <span className="feels-degrees">
                  <a href="#" className="feels-active">
                    {Math.round(weather.feelsTemp)} °C|{" "}
                  </a>
                  <a href="#">{weatherData.feelsTempf}°F</a>
                </span>
              </li>
              <li>Humidity:{weather.humidity}%</li>
              <li>{Math.round(weather.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <div class="personal-info">
          This project was coded by
          <a
            href="https://www.linkedin.com/in/faeze-azimi-50a931255"
            target="_blank"
          >
            Faeze Azimi
          </a>
          and is open-sourced on
          <a href="https://github.com/fa3ze/Faeze-Weather-App" target="_blank">
            GitHub
          </a>
          .
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <div className="Weather">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-5">
                <Bars
                  height="60"
                  width="60"
                  color=" #6c77a3"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  className="loadingBars"
                />
              </div>
              <div className="col-md-5">
                <input
                  type="search"
                  placeholder="🔎 Type a city..."
                  autoComplete="off"
                  className="form-control shadow-sm"
                  onChange={updateCity}
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
        </div>
      </div>
    );
  }
}
