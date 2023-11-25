import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState({ isLoggedIn: false, token: null });

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
    setAuth({ isLoggedIn: true, token });
    const expiresIn = 3600;
    const expirationTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem('token', token);
    localStorage.setItem('token_expiration', expirationTime);
  };

  const logout = () => {
    setAuth({ isLoggedIn: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
