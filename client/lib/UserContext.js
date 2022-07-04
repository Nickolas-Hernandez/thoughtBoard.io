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

  userContext.setUser = user => setUserData(user);

  userContext.setCurrent = project => setProject(project); // move into context file

  userContext.setUserProjects = projects => setProjects(projects);

  userContext.appendProject = newProject => { // move into context file
    setProjects(projects => {
      return [ ...projects, newProject ];
    });
  };

  userContext.setProjectNotes = project => {
    if (!project) return;
    const notes = getNotes(project.id);
    setNotes(notes);
  };

  return (
    <UserContext.Provider value={userContext}>
      { children }
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { UserProvider, useUser };
