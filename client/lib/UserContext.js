import React, { useContext, useState } from 'react';
import { PropTypes } from 'prop-types';

const UserContext = React.createContext();

const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [ userData, setUserData ] = useState(null);
  const [ currentProject, setProject ] = useState({ project: null, notes: null });
  const [ projects, setProjects ] = useState(null);

  const userContext = { userData, projects, currentProject };

  userContext.setUser = user => setUserData(user);

  userContext.setCurrent = (name, notes) => setProject({ project: name, notes: notes }); // move into context file

  userContext.setUserProjects = projects => setProjects(projects);

  userContext.appendProject = newProject => { // move into context file
    setProjects(projects => {
      return [ ...projects, newProject ];
    });
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
