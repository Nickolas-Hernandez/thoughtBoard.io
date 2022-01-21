import React, { useState, useEffect } from 'react';
import { parseToken, createToken } from './lib'
import HeaderSection from './layouts/components/headerSection';

const App = () => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const fetchToken = async () => {
      const user = token ? parseToken(token) : await createToken();
      console.log(user);
      const parsedToken = await parseToken(user);
      console.log('parsedToken: ', parsedToken);
    }
    fetchToken();

  });

  return (
    <>
    <HeaderSection />
    </>
  );
}

export default App;
