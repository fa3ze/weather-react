import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
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
  </StrictMode>
);
