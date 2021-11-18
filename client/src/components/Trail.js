import React from "react";
import Map from "./Map";

function Trail({ trail, user }) {

    const handleLikeClick = () => {
        console.log(trail) 
        console.log(user)
        fetch("/hiker_trails", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hiker_id : user.id,
                trail_id : trail.id
            }),
        }).then((r) => {
           console.log(r)
        });
    }
    return (
        <div>
            <h2>{trail.name}</h2>
            <p>{trail.distance} miles</p>
            <p>{trail.difficulty}</p>
            <p>{trail.elevation} foot elevation gain</p>
            <p>{trail.type_of_hike}</p>
            <button onClick={() => handleLikeClick()}>like</button>
            <Map coordinates={{ lat: trail.lattitude, long: trail.longitude }} />
        </div>
    )

}

export default Trail;