import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState({ isLoggedIn: false, token: null });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) return;
    setAuth({ isLoggedIn: true, token: storedToken });
  }, []);

  const login = token => {
    setAuth({ isLoggedIn: true, token });
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuth({ isLoggedIn: false, token: null });
    // Clear token storage
    localStorage.removeItem('token');
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
