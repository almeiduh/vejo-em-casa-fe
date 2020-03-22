import React from "react";
import ReactDOM from "react-dom";

import Header from "components/Header/Header";

import "styles/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <>
        <Header />
        <App />
      </>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
