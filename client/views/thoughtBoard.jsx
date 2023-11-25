import React, { useEffect } from 'react';
import { parseToken, createToken, useUser, useAuth } from '../lib';
import { getProjects } from '../services';
import HeaderSection from '../components/layout/headerSection';
import SideBar from '../components/layout/sideBar';
import Login from '../components/layout/login';

const ThoughtBoard = () => {
  const { auth, login, logout } = useAuth();
  // const userContext = useUser();

  // useEffect(() => {
  //   const token = window.localStorage.getItem('token');
  //   const assignExistingUser = async token => {
  //     const userInfo = parseToken(token);
  //     userContext.setUser(userInfo);
  //     const userProjects = await getProjects(userInfo.id);
  //     userContext.setUserProjects(userProjects);
  //   };
  //   if (token) {
  //     assignExistingUser(token);
  //     return;
  //   }
  //   const fetchToken = async () => {
  //     const newToken = await createToken();
  //     const newUser = parseToken(newToken);
  //     window.localStorage.setItem('token', newToken);
  //     userContext.setUser(newUser);
  //   };
  //   fetchToken();
  // }, []);

  if (!auth.isLoggedIn) {
    return <Login onLogin={login} />;
  }

  return (
    <>
      <HeaderSection />
      <SideBar />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default ThoughtBoard;
