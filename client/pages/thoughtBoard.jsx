import React, { useState, useEffect } from 'react';
import { parseToken, createToken } from '../lib';
import HeaderSection from '../layouts/components/headerSection';

const ThoughtBoard = () => {
  const [ user, setUser ] = useState(null);
  const [ currentProject, setProject ] = useState(null);
  const [ userProjects, setUserProjects ] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const userInfo = parseToken(token);
      setUser(userInfo);
      getUserProjects(userInfo.id);
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

  const getUserProjects = async userId => {
    const response = await fetch(`/api/userProjects/${userId}`);
    const projectData = await response.json();
    setUserProjects(projectData);
  };

  const appendProject = newProject => {
    setUserProjects(projects => {
      return [ ...projects, newProject ];
    });
  };

  return (
    <HeaderSection user={user} setProject={setProject} projects={userProjects} appendProject={appendProject}/>
  );
};

export default ThoughtBoard;
