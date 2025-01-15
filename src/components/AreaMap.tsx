'use client'

import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const AreaMap = () => {
    const containerStyle = {
        width: "50%",
        height: "500px",
    };

    // Center the map on Satkhira, Bangladesh
    const center = {
        lat: 22.7175, // Latitude for Satkhira
        lng: 89.0716, // Longitude for Satkhira
    };

    return (
        <div className="container  max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-8 py-10">
            {/* Google Map */}
            <div style={{
                maxWidth: "100%",
                overflow: "hidden",
                color: "red",
                width: "800px",
                height: "500px",
            }}>
                <div id="gmap-canvas"
                    style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                ><iframe style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                    frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=khulna&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="googl-ehtml" href="https://www.bootstrapskins.com/themes" id="make-map-infor-mation">premium bootstrap themes</a><style>#gmap-canvas img</style></div>

            {/* Information Section */}
            <div className="text-left">
                <h2 className="text-2xl font-bold mb-4">
                    আমাদের সেবা চলমান জেলা সমূহ:
                </h2>
                <ul className="text-xl">
                    <li>• সাতক্ষীরা জেলা</li>
                </ul>
            </div>
        </div>
    )
}

export default AreaMap