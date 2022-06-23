import React, { useEffect } from 'react';
import { parseToken, createToken, useUser } from '../lib';
import { getProjects } from '../services';
import HeaderSection from '../components/layout/headerSection';
import SideBar from '../components/layout/sideBar';

const ThoughtBoard = () => {
  const userContext = useUser();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const assignExistingUser = async token => {
      const userInfo = parseToken(token);
      userContext.setUser(userInfo);
      const userProjects = await getProjects(userInfo.id);
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
      userContext.setUser(newUser);
    };
    fetchToken();
  }, []);

  return (
    <>
      <HeaderSection />
      <SideBar />
    </>
  );
};

export default ThoughtBoard;
