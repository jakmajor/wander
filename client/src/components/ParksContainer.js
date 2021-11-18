import React from "react";
import Park from './Park.js'

function ParksContainer({ parks = [] }) {
    return (
        <div>
            {parks.length > 0 && parks.map((park, i) =>
                <div id={i}>
                    <Park park={park} />
                </div>
            )}
        </div>
    )

}

export default ParksContainer;