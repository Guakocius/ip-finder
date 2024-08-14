import React, { useState, useEffect } from "react"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          IP Finder
        </h1>
        <h2>
          The IP Finder finds the location of your or another&#39;s IP address
        </h2>
      </header>
      <div className="ip-finder">
          <b className="ip-text">Enter the IP address:</b>
          <code><input type="textbox" placeholder="Please enter your IP" className="" /></code>
      </div>
    </div>
  );
}

export default App;
