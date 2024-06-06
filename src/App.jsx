import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SustainabilityTips from './SustainabilityTips';
import HomePage from './HomePage';
import LearnRecycling from './LearnRecycling';
import CollectPoints from './CollectPoints';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sustainability-tips" element={<SustainabilityTips />} />
        <Route path="/learn-recycling" element={<LearnRecycling />} />
        <Route path="/collect-points" element={<CollectPoints />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
