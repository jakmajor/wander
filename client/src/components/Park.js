import React, { useState } from "react";
import Trail from './Trail.js';
import { useHistory, useParams } from 'react-router-dom';

function Park({ park, user }) {
    const [showParks, setShowParks] = useState(false);

    let params = useParams();
    


    // const handleButtonClick = (e) => {
    //     return showParks ? setShowParks(!showParks) : setShowParks(!showParks)
    // }
    console.log(park.trails)
    return (

        <div>
            {params.parkId}
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