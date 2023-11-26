import React from 'react';
import { useAuth } from '../lib';
import HeaderSection from '../components/layout/headerSection';
import SideBar from '../components/layout/sideBar';
import Login from '../components/layout/login';

const ThoughtBoard = () => {
  const { auth, login, logout } = useAuth();

  if (!auth.isLoggedIn) {
    return <Login onLogin={login} />;
    // return <Login onLogin={login} setUser={setUser} />;
  }

  const handleLogout = () => {
    logout();
    // removeUser();
  };

  return (
    <>
      {/* <HeaderSection />
      <SideBar /> */}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default ThoughtBoard;
