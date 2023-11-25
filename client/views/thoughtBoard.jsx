import React from 'react';
import { useUser, useAuth } from '../lib';
import { getProjects } from '../services';
import HeaderSection from '../components/layout/headerSection';
import SideBar from '../components/layout/sideBar';
import Login from '../components/layout/login';

const ThoughtBoard = () => {
  const { auth, login, logout } = useAuth();
  const { setUser, removeUser } = useUser();

  if (!auth.isLoggedIn) {
    return <Login onLogin={login} setUser={setUser} />;
  }

  const handleLogout = () => {
    logout();
    removeUser();
  };

  return (
    <>
      <HeaderSection />
      <SideBar />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default ThoughtBoard;
