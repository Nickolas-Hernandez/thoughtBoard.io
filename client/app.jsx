import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/landing';
import ThoughtBoard from './views/thoughtBoard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/thought-board" element={<ThoughtBoard />} />
    </Routes>
  );
};

export default App;
