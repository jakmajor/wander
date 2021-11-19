import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import clickedLike from '../images/clicked.png'
import unclickedLike from '../images/unclicked.png'

function Map({ trails = [{ lat: 0, long: 0 }], user }) {
    const [liked, setLiked] = useState(false)
    console.log(trails)

    const handleLikeClick = () => {
       setLiked(!liked)
       console.log(liked)
       if (liked === true) {
        fetch("/hiker_trails", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hiker_id : user.id,
                trail_id : trails[0].id
            }),
        }).then((r) => {
           console.log(r)
        });
        }
        else {
            console.log("delete")
        }
    }

    const Marker = ({trail, i}) => 
    
        <div className="marker-container">
            <div className={`marker-info ${`bg-${Math.floor(Math.random() * (3) + 1).toString()}`}`}>
                <div className='marker-info-image' style={{backgroundImage: `url(${trail.image_url})` }}></div>
                <div style={{padding:'20px'}}>
                    <p className="marker-info-name">{trail.name}</p>
                    <p className="marker-info-other">Distance: {trail.distance} miles</p>
                    <p className="marker-info-other">Elv. Gain:{trail.elevation} ft.</p>
                    <p className="marker-info-other">Difficulty: {trail.difficulty}</p>
                    <p className="marker-info-other">{trail.type_of_hike}!</p>
                    <img src={`${liked ? clickedLike : unclickedLike}`} onClick={() => handleLikeClick()}/>
                </div>
            </div>
            <img className="marker" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/50/000000/external-boots-tourism-and-outdoor-recreation-flatart-icons-lineal-color-flatarticons.png" />
        </div>

    return (
        <> {trails.length > 0 &&
            <div className="google-map" style={{ height: '700px', width: '1000px', borderRadius: '8px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB3d781qcDu7TFgFQ6wd5RvVo2wXgLTmls' }}
                    defaultCenter={{
                        lat: trails[0].lattitude,
                        lng: trails[0].longitude,
                    }}
                    defaultZoom={11}
                >
                    {trails.map((trail, i) =>
                        <Marker
                            lat={trail.lattitude}
                            lng={trail.longitude}
                            text="My Marker"
                            trail={trail}
                            index={i}
                        />
                    )}
                </GoogleMapReact>
            </div>}
        </>
    )
}

export default Map;