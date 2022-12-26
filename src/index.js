import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";
import "./App.css";
import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
    <div className="personal-info">
      This project was coded by
      <a
        href="https://www.linkedin.com/in/faeze-azimi-50a931255"
        target="_blank"
        rel="noreferrer"
      >
        Faeze Azimi
      </a>
      and is open-sourced on
      <a
        href="https://github.com/fa3ze/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      .
    </div>
  </StrictMode>
);
