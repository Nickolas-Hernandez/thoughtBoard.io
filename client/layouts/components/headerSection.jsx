import React, { useState } from "react";
import { Box, Typography } from '@mui/material'
import ProjectSelector from '../../components/projectSelector';
import NewProjectButton from '../../components/newProjectButton';


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

  function handleNewProject() {
    setOpenNewProject(!openNewProject);
  }

  return (
    <Box sx={boxStyle}>
      <Typography variant='h2'>thoughtBoard.io</Typography>
      <ProjectSelector />
      <NewProjectButton openNewProject={handleNewProject} />
    </Box>
  );
}
export default HeaderSection;
