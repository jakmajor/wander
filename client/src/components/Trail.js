import React from "react";
import Map from "./Map";

function Trail({ trail, user }) {

    return (
        <div>
            <div style={{ backgroundImage: `url(${trail.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', minHeight: '300px', width: '300px' }}></div>
            <h2>{trail.name}</h2>
            <p>{trail.distance} miles</p>
            <p>{trail.difficulty}</p>
            <p>{trail.elevation} foot elevation gain</p>
            <p>{trail.type_of_hike}</p>
        </div>
    )

}

export default Trail;