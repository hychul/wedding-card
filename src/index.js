import React from "react";
import ReactDOM from "react-dom/client";
import "main/resource/index.css";
import App from "main/javascript/App";
import reportWebVitals from "main/javascript/util/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
