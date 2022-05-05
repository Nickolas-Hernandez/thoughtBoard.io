import React, { useContext, useState } from 'react';

const UserContext = React.createContext();

const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [ userData, setUserData ] = useState(null);
  const [ currentProject, setProject ] = useState(null);
  const [ projects, setUserProjects ] = useState(null);

  const userContext = { userData, projects, currentProject };

  userContext.setCurrent = name => setProject(name); // move into context file

  userContext.appendProject = newProject => { // move into context file
    setUserProjects(projects => {
      return [ ...projects, newProject ];
    });
  };

  return (
    <UserContext.Provider value={userContext}>
      { children }
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
