import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LoginPage from './LoginPage.js';
import Profile from './Profile.js';
import ParksContainer from "./ParksContainer";
import TrailContainer from "./TrailContainer";
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  const [parks, setParks] = useState([]);


  const FETCH_URL = '/parks'

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const getParks = () => {
    fetch(FETCH_URL)
      .then(r => r.json())
      .then((json) => parksPlease(json))
  }

  useEffect(() => {
    getParks()
  }, []);

  const parksPlease = (parks) => {
    if (!!parks) { setParks(parks) }
  }

  if (!user) return <LoginPage setUser={setUser} />;

  return (


    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/Profile" element={<Profile user={user} />} />
        <Route exact path="/" element={<ParksContainer user={user} parks={parks} />} />
        <Route exact path="/parks/:parksId" element={<TrailContainer user={user} />} />

      </Routes>
    </div>
  );
}

export default App;

{/* <Route exact path="/LogIn" element={<LoginPage setUser={setUser}/>}/> */ }
