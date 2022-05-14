import React from "react";
import ReactDOM from "react-dom";
import "./App.scss"
import Component from "./Component";

import "./index.css";

const App:React.FC = () => (
  <div className="container">
    <div>Name: Host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Component/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
