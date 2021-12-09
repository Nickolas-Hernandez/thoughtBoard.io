import React, { useState, useReducer } from "react";
import { Box, Typography } from '@mui/material'
import ProjectSelector from '../../components/projectSelector';
import NewProjectButton from '../../components/newProjectButton';
import NewProjectForm from '../../components/newProjectForm';


function HeaderSection(){
  const boxStyle = {
    backgroundColor: '#2C2C31',
    color: '#FAF9F6',
    height: '90px',
    padding: '.5rem 1rem',
    display: 'flex',
    alignItems: 'flex-end',
    borderBottom: '1px solid black'
  }

  const [ openNewProject, setOpenNewProject ] = useState(false);

  const intialState = {
    displayNewProjectForm: false,
    currentProject: ''
  };

  const [ state, dispatch ] = useReducer(reducer, intialState);

  function reducer(state, action) {
    switch(action.type){
      case 'handleForm':
        return { ...state, displayNewProjectForm: !state.displayNewProjectForm};
      case 'updateCurrentProject':
        return { ...state, currentProject: action.payload.name}
    }
  }

  function handleNewProject(e) {
    e.preventDefault();
    dispatch({type: 'handleForm'})
  }

  async function submitProjectName(name){
    dispatch({type: 'updateCurrentProject', payload: {name: name}});
    dispatch({type: 'handleForm'});
    try {
      const init = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ projectName: state.currentProject })
      }
      const response = await fetch("/api/newProject", init);
      const result = await response.json();
      console.log(result);
    } catch (err){
      console.error(err);
    }
    //SAVE TO DB
    //SET HASHROUTE
    //RESET AND HIDE FORM
  }

  return (
    <Box sx={boxStyle}>
      <Typography variant='h2'>thoughtBoard.io</Typography>
      <ProjectSelector />
      <NewProjectButton openNewProject={handleNewProject} />
      {state.displayNewProjectForm ? <NewProjectForm submitNewProject={submitProjectName} /> : ''}
    </Box>
  );
}
export default HeaderSection;
