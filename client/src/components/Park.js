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

        <div style={{background: '#ffffff', boxShadow: '0px 10px 30px 12px rgba(23, 57, 89, 0.05)', borderRadius: '8px', padding: '0px', overflow: 'hidden',marginBottom: '20px'}} className={`container`}>
                  <div className="row outside-border">
                    <div className="col-md-4">
                      <div className="image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=952&q=80)`, backgroundSize: 'cover', backgroundPosition: 'center',height: '100%',minHeight: '300px',width: '100%' }}></div>
                    </div>
                    <div className="col-md-8">
                      <div style={{padding:'20px'}}>
                        <h5 className="park-name">{park.name}</h5>
                        <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                      </div>
                    </div>
                  </div>
                </div>
    )
}



export default Park;