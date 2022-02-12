import React, { useState, useEffect } from 'react';
import { parseToken, createToken } from '../lib';
import HeaderSection from '../layouts/components/headerSection';

const ThoughtBoard = () => {
  const [ user, setUser ] = useState(null);
  const [ project, setProject ] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const userInfo = parseToken(token);
      setUser(userInfo);
      return;
    }
    const fetchToken = async () => {
      const newToken = await createToken();
      const newUser = parseToken(newToken);
      window.localStorage.setItem('token', newToken);
      setUser(newUser);
    };
    fetchToken();
  }, []);

  return (
    <HeaderSection user={user} setProject={setProject}/>
  );
};

export default ThoughtBoard;
