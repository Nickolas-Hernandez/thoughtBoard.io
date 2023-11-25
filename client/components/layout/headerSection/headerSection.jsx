import React, { useReducer } from 'react';
import { Typography } from '@mui/material';
import ProjectSelector from '../../projectSelector';
import NewProjectButton from '../../newProjectButton';
import NewProjectForm from '../../newProjectForm';
import { StyledHeader, ProjectContainer } from './headerStyles';
import { useUser } from '../../../lib';

const HeaderSection = props => {
  const { userContext, setCurrent, appendProject } = useUser();

  const initialState = {
    displayNewProjectForm: false,
    currentProject: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'handleForm':
        return { ...state, displayNewProjectForm: !state.displayNewProjectForm };
      case 'updateCurrentProject':
        return { ...state, currentProject: action.payload.name };
    }
  };

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleNewProject = event => {
    event.preventDefault();
    dispatch({ type: 'handleForm' });
  };

  const selectProject = event => {
    dispatch({ type: 'updateCurrentProject', payload: { name: event.target.value } });
  };

  const submitProjectName = async name => {
    dispatch({ type: 'updateCurrentProject', payload: { name: name } });
    dispatch({ type: 'handleForm' });
    try {
      const token = localStorage.getItem('token');
      const init = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          projectName: name,
          owner: userContext.userData.id
        })
      };
      const response = await fetch('/api/newProject', init);
      const result = await response.json();
      appendProject(result.project);
      setCurrent(result.project, []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledHeader>
      <ProjectContainer>
        {state.displayNewProjectForm ? <NewProjectForm submitNewProject={submitProjectName} /> : <ProjectSelector selectProject={selectProject} selectedProject={userContext.currentProject} />}
        <NewProjectButton openNewProject={handleNewProject} />
      </ProjectContainer>
      <Typography variant='h2' sx={{ marginRight: '3.5rem' }}>thoughtBoard.io</Typography>
    </StyledHeader>
  );
};

export default HeaderSection;
