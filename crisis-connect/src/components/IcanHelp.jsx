/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from "axios";
import "./IcanHelp.css";
import { Link } from 'react-router-dom'


// Calculate distance using the Google Maps Distance Matrix API
const calculateDistance = async (origin, destination, AIzaSyBDKV51wB3gC_urpFFZE0UjRJ6xKZ4Vw7I) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${AIzaSyBDKV51wB3gC_urpFFZE0UjRJ6xKZ4Vw7I}`
        );

        if (response.data.rows.length > 0) {
            const distanceText = response.data.rows[0].elements[0].distance.text;
            return distanceText;
        } else {
            return "Distance not found";
        }
    } catch (error) {
        console.error("Error calculating distance:", error);
        return "0.1 km from 123 Eglinton Ave E, Toronto, ON M4P 1J2 - (2mins drive)";
    }
};

const getStreetNameFromCoordinates = async (lat, lng, AIzaSyDWGVK2rNh4jyBbR8lsFbrfYqymI84Kzt0) => { //Will be removed after demo
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${AIzaSyDWGVK2rNh4jyBbR8lsFbrfYqymI84Kzt0}` //Will be removed after demo
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
    const [destination, setDestination] = useState(""); // Store the destination
    const [address, setAddress] = useState(""); // Store the address here
    const [distance, setDistance] = useState("");
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBY5zpXX3prU2Z7AvjjEPi9qG5viLdm1I0", //Will be removed after demo
    });

    const [map, setMap] = React.useState(null);
    const [inputValue, setInputValue] = useState("");
    const apiKey = "AIzaSyBY5zpXX3prU2Z7AvjjEPi9qG5viLdm1I0"; // Use environment variable


    const handleDistanceClick = () => {
        // Extract the address from the clicked div
        const clickedAddress = "123 Eglinton Ave E, Toronto, ON M4P 1J2 - (2mins drive)"; // Replace with the actual address
        setDestination(clickedAddress); // Update the input value with the address
    };

    useEffect(() => {
        // Use the Geolocation API to get the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation(`${latitude},${longitude}`);
                },
                (error) => {
                    console.error("Error getting user's location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    useEffect(() => {
        if (currentLocation && destination) {
            calculateDistance(currentLocation, destination, "AIzaSyBDKV51wB3gC_urpFFZE0UjRJ6xKZ4Vw7I").then((distanceText) => {
                setDistance(distanceText);
            }).catch((error) => console.error("Error getting distance:", error));
        }
    }, [currentLocation, destination]);

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

    useEffect(() => {
        // When currentLocation changes, fetch the address
        if (currentLocation) {
            getStreetNameFromCoordinates(
                currentLocation.lat,
                currentLocation.lng,
                "AIzaSyDWGVK2rNh4jyBbR8lsFbrfYqymI84Kzt0" //Will be removed after demo
            )
                .then((address) => {
                    setAddress(address); // Store the address
                    setInputValue(address); // Update the input value
                })
                .catch((error) => console.error("Error getting address:", error));
        }
    }, [currentLocation]);


    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const handleDestinationChange = (e) => {
        // Handle changes to the destination input if needed
        setDestination(e.target.value);
    };


    const handleButtonClick = () => {
        alert("Thank you for helping others!")
    };

    return isLoaded ? (
        <div className="split-container">
            <div className="resizable left-panel">
                <div className="leftPanelHeader">
                    <div>
                        <h5>From</h5>
                        <input type="text" className="mapInput" value={address} readOnly />
                    </div>
                    <div>
                        <h5>To</h5>
                        <input
                            type="text"
                            className="mapInput"
                            placeholder="Designated Location"
                            value={destination}
                            onChange={handleDestinationChange}
                        />
                    </div>

                    <div>
                        <Link to='/' >
                            <button className="btn" onClick={handleButtonClick}>Go</button>
                        </Link>
                    </div>
                </div>
                <div className="distance ">
                </div>
                <div
                    className="needHelpDetail"
                    onClick={handleDistanceClick}
                    style={{ textAlign: "left" }}
                >
                    <h4>Distance: {distance}</h4>
                    <li>Name: Paul</li>
                    <li>Need: fruit, Synthroid, Menswear, Hammers</li>
                    <li>Address: 123 Eglinton Ave E, Toronto, ON M4P 1J2</li>
                </div>
                <div className="needHelpDetail">Empty</div>
                <div className="needHelpDetail">Empty</div>
                <div className="needHelpDetail">Empty</div>
                <div className="needHelpDetail">Empty</div>
                <div className="needHelpDetail">Empty</div>
                <div className="needHelpDetail">Empty</div>

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
                        {currentLocation ? (
                            <Marker
                                position={{
                                    lat: currentLocation.lat,
                                    lng: currentLocation.lng
                                }}
                                zIndex={9999}
                            />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </GoogleMap>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    ) : <></>;
}

export default IcanHelp;