import React, { useContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import { getNotes } from '../services';

const UserContext = React.createContext();

const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [ userData, setUserData ] = useState(null);
  const [ currentProject, setProject ] = useState(null);
  const [ projects, setProjects ] = useState(null);
  const [ notes, setNotes ] = useState(null);

  const userContext = { userData, projects, currentProject, notes };

  const setUser = user => setUserData(user);

  const setCurrent = project => setProject(project); // move into context file

  const setUserProjects = projects => setProjects(projects);

  const appendProject = newProject => { // move into context file
    setProjects(projects => {
      return [ ...projects, newProject ];
    });
  };

  const setProjectNotes = project => {
    if (!project) return;
    const notes = getNotes(project.id);
    setNotes(notes);
  };

  const removeUser = () => {
    setUserData(null);
    setProject(null);
    setProjectNotes(null);
    setNotes(null);
  };

  return (
    <UserContext.Provider
    value={{
      userContext,
      setUser,
      setCurrent,
      setUserProjects,
      appendProject,
      setProjectNotes,
      removeUser
    }}>
      { children }
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { UserProvider, useUser };
