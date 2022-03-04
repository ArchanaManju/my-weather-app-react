import React from "react";
import logo from "./logo.svg";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Helo React</h1>
        <Weather city="leeds" />
      </header>
    </div>
  );
}

export default App;
