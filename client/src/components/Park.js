import React, { useState } from "react";
import Trail from './Trail.js';

function Park({ park, user }) {
    const [showParks, setShowParks] = useState(false);


    // const handleButtonClick = (e) => {
    //     return showParks ? setShowParks(!showParks) : setShowParks(!showParks)
    // }
    console.log(park.trails)
    return (

        <div>
            <button onClick={() => setShowParks(!showParks)}>
                <h2>{park.name}</h2>
                <p>{park.state}</p>
            </button>
            { showParks && park.trails.map((trail) => 
                <Trail trail={trail} user={user} />
            )}
        </div>
    )
}



export default Park;