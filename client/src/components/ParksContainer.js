import React from "react";
import Park from './Park.js'
import { Outlet, Link } from 'react-router-dom';

function ParksContainer({ parks = [], user }) {
    return (
        <div>
            {parks.length > 0 && parks.map((park, i) =>
                <div id={i}>
                    <Link to={`/parks/${park.id}`}>
                        <Park park={park} user={user} />
                    </Link>
                </div>
            )}
            <Outlet />
        </div>
    )

}

export default ParksContainer;