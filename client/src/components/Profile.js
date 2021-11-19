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
                    <div>
                        <li>{trail.name}</li>
                        
                    </div>
                )}
            </ul>
        </div>
   )

}

export default Profile;