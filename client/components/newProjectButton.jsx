import React from 'react';
import { Typography } from '@mui/material';

const styles = {
  borderBottom: '1px solid #FAF9F6',
  margin: '0 10px',
  cursor: 'pointer'
}

const NewProjectButton = (props) => {
  return (
    <Typography onClick={props.openNewProject}  sx={styles} variant="body1">New Project</Typography>
  );
}

export default NewProjectButton;
