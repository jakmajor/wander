import React from "react";

function Profile ({user}) {
    return(
        <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.bio}</h1>
            <img src={user.image_url}></img>
            <ul>
                {user.trails.map((trail) => 
                    <li>{trail.name}</li>
                )}
            </ul>
        </div>
   )

}

export default Profile;