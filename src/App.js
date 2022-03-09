import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather APP</h1>
        <Weather city="leeds" />
      </header>
    </div>
  );
}

export default App;
