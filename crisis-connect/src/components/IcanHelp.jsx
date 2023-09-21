import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./IcanHelp.css";

const containerStyle = {
    lat: null,
    lng: null,
};


function IcanHelp() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBY5zpXX3prU2Z7AvjjEPi9qG5viLdm1I0"
    })

    const [map, setMap] = React.useState(null);

    useEffect(() => {
        // Use the Geolocation API to get the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({
                        lat: latitude,
                        lng: longitude,
                    });
                },
                (error) => {
                    console.error("Error getting user's location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div className="split-container">
            <div className="resizable left-panel">
                <div className="leftPanelHeader">User's Request</div>
                <div className="needHelpDetail">123</div>
                <div className="needHelpDetail">123</div>
                <div className="needHelpDetail">123</div>
                <div className="needHelpDetail">123</div>
                <div className="needHelpDetail">123</div>
                <div className="needHelpDetail">123</div>
                <div className="needHelpDetail">123</div>
                <div className="needHelpDetail">123</div>
            </div>
            <div className="resize-handle"></div>
            <div className="right-panel">
                {isLoaded && currentLocation ? (
                    <GoogleMap
                        mapContainerStyle={{ height: "100%" }}
                        center={currentLocation}
                        zoom={18}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        id="google-map"
                    >
                        {/* Child components, such as markers, info windows, etc. */}
                        {isLoaded && (
                            <Marker
                                position={currentLocation}
                            />
                        )}
                    </GoogleMap>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    ) : <></>
} 

export default IcanHelp; 