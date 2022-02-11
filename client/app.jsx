import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import ThoughtBoard from './pages/thoughtBoard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="thought-board" element={<ThoughtBoard />} />
    </Routes>
  );
}

export default App;
