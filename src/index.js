import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./styles.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
