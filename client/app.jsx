import React, { useState, useEffect } from 'react';
import { parseToken, createToken } from './lib'
import HeaderSection from './layouts/components/headerSection';

const App = () => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(token) {
      const userInfo = parseToken(token);
      setUser(userInfo);  // fix this
      return;
    }
    const fetchToken = async () => {
      const newToken = await createToken();
      const newUser = parseToken(newToken)
      window.localStorage.setItem('token', newToken);
      setUser(newUser);
    }
    fetchToken();
  }, []);

  return (
    <>
    <HeaderSection />
    </>
  );
}

export default App;
