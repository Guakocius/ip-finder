import React, { useEffect, useState } from 'react'; 
import ReactMapGL, { Marker } from 'react-map-gl'; 
import { RiUserLocationFill } from 'react-icons/ri'; 
import config from "./config.js"

const API_KEY = config.API_KEY

const Map = ({ lat, lon }) => { 
  
    // Setting up the initial viewport of the map 
    const [viewport, setViewport] = useState({ 
        latitude: lat, 
        longitude: lon, 
        zoom: 14, 
        bearing: 0, 
        pitch: 0, 
        width: '100%', 
        height: '100%', 
    })

    useEffect(() => { 
        const a = { ...viewport }; 
        a.latitude = lat; 
        a.longitude = lon; 
        setViewport(a); 
    }, [lat, lon]); 

    return ( 
        <div className="map"> 
            <ReactMapGL 
                mapboxApiAccessToken={API_KEY} 
                {...viewport} 
                onViewportChange={(viewport) => setViewport(viewport)} 
                mapStyle={"https://api.tomtom.com/map/1/tile/basic/main/10/0.2/0.2.png?key=$API_KEY&tileSize=256&view=Unified&language=NGT"}>
                <Marker latitude={lat} longitude={lon}> 
                    <div className="mark"> 
                        <RiUserLocationFill size="25px" color="blue" /> 
                    </div> 
                </Marker> 
            </ReactMapGL> 
        </div> 
    ); 
}; 
  
export default Map;