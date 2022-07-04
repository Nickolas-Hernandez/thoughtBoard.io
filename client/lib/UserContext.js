import React, { useContext, useState } from 'react';
import { PropTypes } from 'prop-types';

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

  userContext.setCurrent = (name, notes) => setProject({ project: name, notes: notes }); // move into context file

  userContext.setUserProjects = projects => setProjects(projects);

  userContext.appendProject = newProject => { // move into context file
    setProjects(projects => {
      return [ ...projects, newProject ];
    });
  };

  userContext.setProjectNotes = noteList => setNotes(noteList);

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
