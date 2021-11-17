import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LoginPage from './LoginPage.js';
import Profile from './Profile.js';
import Park from './Park.js'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        console.log("user in app",user)
      }
    });
  }, []);

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/LogIn" element={<LoginPage/>}/>
        <Route exact path="/Profile" element={<Profile user={user}/>}/>
        <Route exact path="/" element={<Park user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
