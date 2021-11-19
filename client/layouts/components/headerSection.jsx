import React from "react";
import Box from '@mui/material/box';
import Typography from "@mui/material/Typography";
import ProjectSelector from '../../components/projectSelector';


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
    </Box>
  );
}
export default HeaderSection;
