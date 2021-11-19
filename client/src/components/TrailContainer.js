import React, { useState, useEffect } from 'react'
import Map from './Map.js'
import { useParams } from 'react-router-dom';

export default function TrailContainer({}) {
  const [trails, setTrails] = useState([]);
  const {parksId} = useParams()

  useEffect(() => {
    getPark()
  }, [parksId]);

  const getPark = () => {
    fetch(`/parks/${parksId}`)
      .then(r => r.json())
      .then((json) => setTrails(json.trails))
  }


  return (
  <div>
    <Map trails={trails}/>
  </div>
  )
}