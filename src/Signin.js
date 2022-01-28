import "./styles.css";
import App from "./App.js";
import ReactDOM from "react-dom";
import React from "react";
export default function Signin() {
  function hii() {
    return ReactDOM.render(<App />, document.getElementById("root"));
  }
  return (
    <div>
      <div className="duck"></div>
      <div className="container">
        <div>
          <h1>Signin here</h1>
          <h3>Your Email Address</h3>
          <input placeholder="xyz@gmail.com" />
          <h3>Your Password</h3>
          <input />
        </div>
        <button onClick={hii}> Login </button>
      </div>
    </div>
  );
}
