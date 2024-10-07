import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Story from './components/Story';
import InteractiveSolarStorm from './components/InteractiveSolarStorm';
import Impact from './components/Impact';
import HowScientistsTrack from './components/HowScientistsTrack';
import Future from './components/Future';
import Source from './components/Source'
import './App.css';
import Video from "./components/Video";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Solar Storms - May 2024</h1>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/story">Story</NavLink>
            <NavLink to="/interactive-solar-storm">Explore</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/how-scientists-track">How Scientists Track</NavLink>
            <NavLink to="/future">Future</NavLink>
            <NavLink to="/video">Vidéo</NavLink>
            <NavLink to="/source">Source</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/interactive-solar-storm" element={< InteractiveSolarStorm/>} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/how-scientists-track" element={<HowScientistsTrack />} />
          <Route path="/future" element={<Future />} />
          <Route path="/video" element={<Video />} />
          <Route path="/source" element={<Source />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
