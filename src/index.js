import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// state
import ShowState from "../src/contexts/shows/ShowState";
import AlertState from "../src/contexts/alerts/AlertState";

ReactDOM.render(
  <ShowState>
    <AlertState>
      <App />
    </AlertState>
  </ShowState>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
