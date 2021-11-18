import React from "react";
import GoogleMapReact from 'google-map-react';
import './index.css'

function Map({ coordinates = {} }) {

    const Marker = () => <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/50/000000/external-boots-tourism-and-outdoor-recreation-flatart-icons-lineal-color-flatarticons.png"/>

    return (
        <div className="google-map" style={{ height: '400px', width: '400px', borderRadius: '8px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB3d781qcDu7TFgFQ6wd5RvVo2wXgLTmls' }}
                defaultCenter={{
                    lat: coordinates.lat,
                    lng: coordinates.long,
                }}
                defaultZoom={11}
            >
                <Marker
                    lat={coordinates.lat}
                    lng={coordinates.long}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;