import React from "react";
import { Box, Typography } from '@mui/material'
import ProjectSelector from '../../components/projectSelector';
import NewProjectButton from '../../components/newProjectButton';


const HeaderSection = () => {
  const boxStyle = {
    backgroundColor: '#2C2C31',
    color: '#FAF9F6',
    height: '90px',
    padding: '.5rem 1rem',
    display: 'flex',
    alignItems: 'flex-end',
    borderBottom: '1px solid black'
  }

  return (
    <Box sx={boxStyle}>
      <Typography variant='h2'>thoughtBoard.io</Typography>
      <ProjectSelector />
      <NewProjectButton />
    </Box>
  );
}
export default HeaderSection;
