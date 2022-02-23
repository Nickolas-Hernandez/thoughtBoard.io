import React, { useReducer } from 'react';
import { Typography } from '@mui/material';
import ProjectSelector from '../../projectSelector';
import NewProjectButton from '../../newProjectButton';
import NewProjectForm from '../../newProjectForm';
import StyledHeader from './headerStyles';

const HeaderSection = props => {

  const intialState = {
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

  const [ state, dispatch ] = useReducer(reducer, intialState);

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
      const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: name,
          owner: props.user.id
        })
      };
      const response = await fetch('/api/newProject', init);
      const result = await response.json();
      props.appendProject(result.project);
      props.setProject(result.project);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledHeader>
      <Typography variant='h2'>thoughtBoard.io</Typography>
      <ProjectSelector projects={props.projects} selectProject={selectProject} selectedProject={state.currentProject} />
      <NewProjectButton openNewProject={handleNewProject} />
      {state.displayNewProjectForm ? <NewProjectForm submitNewProject={submitProjectName} /> : ''}
    </StyledHeader>
  );
};

export default HeaderSection;
