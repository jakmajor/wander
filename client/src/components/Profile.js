import React from "react";
import Trail from "./Trail";

function Profile({ user, setUser }) {


  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <img className="profile-image" src={user.image_url}></img>
          <h1 className="text-center profile-name">{user.name}</h1>
          <h1 className="text-center profile-bio">{user.bio}</h1>
          <button className="signout-button margin-center" onClick={handleLogoutClick}>Sign Out</button>
        </div>
      </div>
      <div className='row justify-content-center marg-top-40'>
        <div className='col'>
          <div className="trail-card-cont">
            {user.trails.map((trail) =>
              <div className="trail-card">
                <Trail trail={trail} user={user} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Profile;