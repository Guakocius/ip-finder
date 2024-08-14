import React, { useState, useEffect } from "react"
import Axios from "axios"
import Map from "./Map.js";
import config from "./config.js"

import './App.css';

function App() {

  const [ipDetails, setIpDetails] = useState([]); 
  const [lat, setLat] = useState(22.5726); 
  const [lon, setLon] = useState(88.3832);
  
  useEffect(() => { 
    Axios.get('https://ipapi.co/json/').then((res) => { 
        setIpDetails(res.data); 
        setLat(res.data.latitude); 
        setLon(res.data.longitude); 
    }); 
}, []) 


  // var API_KEY = config.API_KEY

  function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <u>IP Finder</u>
        </h1>
        <h2>
          The IP Finder finds the location of your or another&#39;s IP address
        </h2>
      </header>
      <div className="ip-finder">
          <b className="ip-text">Enter the IP address:</b>
          <code><input type="number" placeholder="Please enter your IP" className="ip-textbox" onKeyDown={isNumberKey}/></code>
          {/* TODO: Integrate this into the numeric textbox; map isn't showing, look on how
          to make the map work*/}
          <h1 id="ip">{ipDetails.ip}</h1> 
          <h4>Approximate location: </h4> 
  
          <p>{ipDetails.city}, {ipDetails.region}, 
              {ipDetails.country_name}.
            </p> 
          <h4>Internet Service Provider(ISP):
            </h4> 
          <p>{ipDetails.org}
            </p> 
      </div>
      <Map lat={lat} lon={lon} /> 
    </div>
  );
}

export default App;
