import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import LoginPage from './LoginPage.js';
import Profile from './Profile.js';
import Park from './Park.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/LogIn" element={<LoginPage/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/" element={<Park />}/>
      </Routes>
    </div>
  );
}

export default App;
