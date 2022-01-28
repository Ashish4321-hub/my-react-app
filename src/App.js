/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import "./styles.css";
import ReactDOM from "react-dom";
import Signin from "./Signin";
import React from "react";
export default function App() {
  function hi() {
    return ReactDOM.render(<Signin />, document.getElementById("root"));
  }
  return (
    <div className="container">
      <div>
        <h1>Login here</h1>
        <h3>Your Email Address</h3>
        <input placeholder="xyz@gmail.com" />
        <h3>Your Password</h3>
        <input />
      </div>
      <button onClick={hi}> Sign in </button>
      <button>Submit</button>
    </div>
  );
}
