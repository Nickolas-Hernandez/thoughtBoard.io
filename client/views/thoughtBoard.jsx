import React, { useEffect } from 'react';
import { UserProvider, parseToken, createToken } from '../lib';
import HeaderSection from '../components/layout/headerSection';

const ThoughtBoard = () => {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const assignExistingUser = async token => {
      const userInfo = parseToken(token);
      setUser(userInfo);
      const userProjects = await getUserProjects(userInfo.id);
      setUserProjects(userProjects);
    };
    if (token) {
      assignExistingUser(token);
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

  const getUserProjects = async userId => { // move
    const response = await fetch(`/api/userProjects/${userId}`);
    const projectData = await response.json();
    return projectData;
  };

  return (
    <UserProvider>
      <HeaderSection />
    </UserProvider>
  );
};

export default ThoughtBoard;
