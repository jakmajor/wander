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

    <div style={{boxShadow: '0px 10px 30px 12px rgba(23, 57, 89, 0.05)', borderRadius: '2px', padding: '0px', overflow: 'hidden', marginBottom: '20px' }} className={`container outside-border ${`bg-${Math.floor(Math.random() * (3) + 1).toString()}`}`}>
      <div className="row">
        <div className="col-md-4">
          <div className="image" style={{ backgroundImage: `url(${park.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', minHeight: '300px', width: '100%' }}></div>
        </div>
        <div className="col-md-8">
          <div style={{ padding: '20px' }}>
            <h5 className="park-name">{park.name}</h5>
            <p className="info-text">{park.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Park;