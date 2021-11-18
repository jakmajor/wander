import React from "react";
import Map from "./Map";

function Trail ({trail}) {
    return(
         <div>
             <h2>{trail.name}</h2>
             <Map coordinates={{lat: trail.lattitude, long: trail.longitude}} />
         </div>
    )
 
 }
 
 export default Trail;