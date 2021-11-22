import React, { useState, useEffect } from 'react'
import Map from './Map.js'
import { useParams } from 'react-router-dom';

export default function TrailContainer({ user }) {
  const [trails, setTrails] = useState([]);
  const { parksId } = useParams()

  useEffect(() => {
    getPark()
  }, [parksId]);

  const getPark = () => {
    fetch(`/parks/${parksId}`)
      .then(r => r.json())
      .then((json) => setTrails(json.trails))
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Map user={user} trails={trails} />
        </div>
      </div>
    </div>
  )
}