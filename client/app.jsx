import React, { useState, useEffect } from 'react';
import { parseToken, createToken } from './lib'
import HeaderSection from './layouts/components/headerSection';

const App = () => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const user = token ? parseToken(token) : createToken();

  });

  return (
    <>
    <HeaderSection />
    </>
  );
}

export default App;
