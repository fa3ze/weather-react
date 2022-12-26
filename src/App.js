import "./App.css";
import axios from "axios";
import { Bars } from "react-loader-spinner";

export default function App(props) {
  function displayWeather(response) {
    alert(`temperature in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello {props.city} <br />
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </p>
      </header>
    </div>
  );
}
