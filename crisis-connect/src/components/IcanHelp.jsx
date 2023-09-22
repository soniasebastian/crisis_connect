import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import axios from "axios";
import "./IcanHelp.css";

const getStreetNameFromCoordinates = async (lat, lng, AIzaSyDWGVK2rNh4jyBbR8lsFbrfYqymI84Kzt0) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${AIzaSyDWGVK2rNh4jyBbR8lsFbrfYqymI84Kzt0}`
        );

        if (response.data.results.length > 0) {
            // Extract the formatted address, which contains the street name
            const address = response.data.results[0].formatted_address;
            return address;
        } else {
            return "Address not found";
        }
    } catch (error) {
        console.error("Error fetching address:", error);
        return "Error fetching address";
    }
};


function IcanHelp() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBY5zpXX3prU2Z7AvjjEPi9qG5viLdm1I0"
    })

    const [map, setMap] = React.useState(null);
    const [inputValue, setInputValue] = useState("");

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

        if (currentLocation) {
            getStreetNameFromCoordinates(
                currentLocation.lat,
                currentLocation.lng,
                "AIzaSyDWGVK2rNh4jyBbR8lsFbrfYqymI84Kzt0"
            )
            .then((address) => setInputValue(address))
            .catch((error) => console.error("Error getting address:", error));
        }

    }, [currentLocation]);

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div className="split-container">
            <div className="resizable left-panel">
                <div className="leftPanelHeader">
                    <div>
                        <input type="text" className="mapInput" value={inputValue} readOnly/>
                    </div>
                    <div>
                        <input type="text" className="mapInput" placeholder="Designated Location" />
                    </div>
                </div>
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