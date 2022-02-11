import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <h1>This Is Big Beefy Landing Page</h1>
      <Link to="/thought-board">Go To Projects -></Link>
    </>
  );
}

export default LandingPage;
