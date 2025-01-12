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
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* Marker at Satkhira */}
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>

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