import React, { useState, useEffect } from 'react';
import { UserContext, parseToken, createToken } from '../lib';
import HeaderSection from '../components/layout/headerSection';

const ThoughtBoard = () => {
  const [ user, setUser ] = useState(null);
  const [ currentProject, setProject ] = useState(null);
  const [ projects, setUserProjects ] = useState(null);

  const userContext = { user, projects, currentProject };
  console.log('userContext: ', userContext);

  userContext.setCurrent = name => setProject(name); // move into context file

  userContext.appendProject = newProject => { // move into context file
    setUserProjects(projects => {
      return [ ...projects, newProject ];
    });
  };

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const assignExistingUser = async token => {
      const userInfo = parseToken(token);
      setUser(userInfo);
      const userProjects = await getUserProjects(userInfo.id);
      setUserProjects(userProjects);
    };
    if (token) {
      assignExistingUser(token);
      return;
    }
    const fetchToken = async () => {
      const newToken = await createToken();
      const newUser = parseToken(newToken);
      window.localStorage.setItem('token', newToken);
      setUser(newUser);
    };
    fetchToken();
  }, []);

  const getUserProjects = async userId => { // move
    const response = await fetch(`/api/userProjects/${userId}`);
    const projectData = await response.json();
    return projectData;
  };

  return (
    <UserContext.Provider value={userContext}>
      <HeaderSection />
    </UserContext.Provider>
  );
};

export default ThoughtBoard;
