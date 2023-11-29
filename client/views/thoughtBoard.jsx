import React from 'react';
import { useAuth } from '../lib';
import HeaderSection from '../components/layout/headerSection';
import SideBar from '../components/layout/sideBar';
import Login from '../components/layout/login';
import NotePad from '../components/layout/notePad';

const ThoughtBoard = () => {
  const { auth, login, logout } = useAuth();

  if (!auth.isLoggedIn) {
    return <Login onLogin={login} />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <HeaderSection />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <NotePad note={auth.selectedNote} />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default ThoughtBoard;
