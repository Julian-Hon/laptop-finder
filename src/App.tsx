import './App.css'
import React from "react"
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Favourites from './pages/Favourites.tsx';
import Homepage from './pages/Homepage.tsx';
import History from './pages/History.tsx';


const App = () => {
  return (
    <Routes>
      {/* Route for Homepage */}
      <Route path="/" element={<Homepage />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/history" element={<History />} />
      {/* Route for Favourites */}
    </Routes>
  );
};

export default App;
