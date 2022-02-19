import React, { useReducer } from 'react';
import { Box, Typography } from '@mui/material';
import ProjectSelector from '../../components/projectSelector';
import NewProjectButton from '../../components/newProjectButton';
import NewProjectForm from '../../components/newProjectForm';

function HeaderSection(props) {
  const boxStyle = {
    backgroundColor: '#2C2C31',
    color: '#FAF9F6',
    height: '90px',
    padding: '.5rem 1rem',
    display: 'flex',
    alignItems: 'flex-end',
    borderBottom: '1px solid black'
  };

  const intialState = {
    displayNewProjectForm: false,
    currentProject: ''
  };

  const [ state, dispatch ] = useReducer(reducer, intialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'handleForm':
        return { ...state, displayNewProjectForm: !state.displayNewProjectForm };
      case 'updateCurrentProject':
        return { ...state, currentProject: action.payload.name };
    }
  }

  function handleNewProject(e) {
    e.preventDefault();
    dispatch({ type: 'handleForm' });
  }

  function selectProject(e) {
    dispatch({ type: 'updateCurrentProject', payload: { name: e.target.value } });
  }

  async function submitProjectName(name) {
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
      console.log('result: ', result);
      props.appendProject(result.project);
      props.setProject(result.project);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Box sx={boxStyle}>
      <Typography variant='h2'>thoughtBoard.io</Typography>
      <ProjectSelector projects={props.projects} selectProject={selectProject} selectedProject={state.currentProject} />
      <NewProjectButton openNewProject={handleNewProject} />
      {state.displayNewProjectForm ? <NewProjectForm submitNewProject={submitProjectName} /> : ''}
    </Box>
  );
}
export default HeaderSection;