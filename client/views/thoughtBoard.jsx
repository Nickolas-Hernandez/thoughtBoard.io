import React, { useEffect } from 'react';
import { useUser, useAuth, parseToken } from '../lib';
import HeaderSection from '../components/layout/headerSection';
import SideBar from '../components/layout/sideBar';
import Login from '../components/layout/login';

const ThoughtBoard = () => {
  const { auth, login, logout } = useAuth();
  const { userContext, setUser, removeUser } = useUser();
  const { token } = auth;

  useEffect(() => {
    if (!userContext.userData && token) {
      setUser(parseToken(token));
    }
  }, [ userContext, token, setUser ]);

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
