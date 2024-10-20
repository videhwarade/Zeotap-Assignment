// src/App.js
import React from "react";
import CreateRule from "./components/CreateRule";
import EvaluateRule from "./components/EvaluateRule";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Rule Engine</h1>
      <CreateRule />
      <hr />
      <EvaluateRule />
    </div>
  );
}

export default App;
