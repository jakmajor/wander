import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import clickedLike from '../images/clicked.png'
import unclickedLike from '../images/unclicked.png'
import mapStyles from './MapStyles'

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
            <div className="google-map" style={{ height: '700px', width: '1000px', borderRadius: '8px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDhTkgFD1XkuNMQmVAD6b5AmGYZv9K4nN0' }}
                    defaultCenter={{
                        lat: trails[0].lattitude,
                        lng: trails[0].longitude,
                    }}
                    defaultZoom={11}
                    options={{styles: [
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "hue": "#ff0000"
                                },
                                {
                                    "weight": "0.01"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#444444"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.province",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f3ebea"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "weight": "0.01"
                                },
                                {
                                    "color": "#010101"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "color": "#010101"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5d5b9"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f3ebea"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.landcover",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#75af79"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.landcover",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#75af79"
                                },
                                {
                                    "saturation": "0"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 45
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#010101"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#010101"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#010101"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#010101"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#010101"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#46bcec"
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c5e9fa"
                                }
                            ]
                        }
                    ]}}
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