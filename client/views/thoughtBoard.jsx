import React, { useEffect } from 'react';
import { parseToken, createToken, useUser } from '../lib';
import HeaderSection from '../components/layout/headerSection';

const ThoughtBoard = () => {
  const userContext = useUser();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const assignExistingUser = async token => {
      const userInfo = parseToken(token);
      userContext.setUser(userInfo);
      const userProjects = await getUserProjects(userInfo.id);
      userContext.setUserProjects(userProjects);
    };
    if (token) {
      assignExistingUser(token);
      return;
    }
    const fetchToken = async () => {
      const newToken = await createToken();
      const newUser = parseToken(newToken);
      window.localStorage.setItem('token', newToken);
      userContext.setUserData(newUser);
    };
    fetchToken();
  }, []);

  const getUserProjects = async userId => { // move
    const response = await fetch(`/api/userProjects/${userId}`);
    const projectData = await response.json();
    return projectData;
  };

  return (
    <HeaderSection />
  );
};

export default ThoughtBoard;
