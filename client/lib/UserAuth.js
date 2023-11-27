import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUser, getProjects, getProjectNotes } from '../services';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState({
    isLoggedIn: false,
    token: null,
    userDetails: null,
    userProjects: [],
    currentProject: null,
    currentNotes: []
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('token_expiration');
    if (!storedToken || new Date().getTime() > expirationTime) {
      localStorage.removeItem('token');
      localStorage.removeItem('token_expiration');
      logout();
    } else {
      setAuth(prevState => ({ ...prevState, isLoggedIn: true, token: storedToken }));
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
    setAuth(() => ({
      isLoggedIn: false,
      token: null,
      userDetails: null,
      userProjects: [],
      currentProject: null
    }));
  };

  useEffect(() => {
    if (auth.isLoggedIn && auth.token) {
      const fetchUserData = async () => {
        try {
          const userDetails = await getUser(auth.token);
          const userProjects = await getProjects(userDetails.id, auth.token);
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

  const setCurrentProject = currentProject => {
    setAuth(prevState => ({
      ...prevState,
      currentProject: currentProject
    }));
  };

  const appendNewProject = newProject => {
    setAuth(prevState => ({
      ...prevState,
      userProjects: [ ...prevState.userProjects, newProject ]
    }));
  };

  useEffect(() => {
    if (auth.isLoggedIn && auth.currentProject) {
      const fetchProjectNotes = async () => {
        const notes = await getProjectNotes(auth.currentProject.id);
        setAuth(prevState => ({
          ...prevState,
          currentNotes: notes
        }));
      };
      fetchProjectNotes();
    }
  }, [ auth.isLoggedIn, auth.currentProject ]);

  console.log('auth: ', auth);

  return (
    <AuthContext.Provider value={{ auth, login, logout, setCurrentProject, appendNewProject }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
