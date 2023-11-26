import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUser, getProjects } from '../services';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState({
    isLoggedIn: false,
    token: null,
    userDetails: null,
    userProjects: [],
    currentProject: null
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('token_expiration');
    if (!storedToken || new Date().getTime() > expirationTime) {
      localStorage.removeItem('token');
      localStorage.removeItem('token_expiration');
      logout();
    } else {
      setAuth({ isLoggedIn: true, token: storedToken });
    }
  }, []);

  const login = token => {
    if (!token) return;
    setAuth(prevState => ({
      ...prevState,
      isLoggedIn: true,
      token
    }));
    const expiresIn = 3600;
    const expirationTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem('token', token);
    localStorage.setItem('token_expiration', expirationTime);
  };

  const logout = () => {
    setAuth(prevState => ({
      ...prevState,
      isLoggedIn: false,
      token: null
    }));
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
  };

  useEffect(() => {
    if (auth.isLoggedIn && auth.token) {
      const fetchUserData = async () => {
        try {
          const userDetails = await getUser(auth.token);
          console.log('userDetails: ', userDetails);
          const userProjects = await getUser(auth.token);
          console.log('userProjects: ', userProjects);
          setAuth(prevState => ({
            ...prevState,
            userDetails,
            userProjects
          }));
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };

      fetchUserData();
    }
  }, [ auth.isLoggedIn, auth.token ]);

  const setCurrentProject = {

  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
