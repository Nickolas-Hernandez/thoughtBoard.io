import React, { useState } from 'react';
import { Typography } from '@mui/material';
import ProjectSelector from '../../projectSelector';
import NewProjectForm from '../../newProjectForm';
import { StyledHeader, ProjectContainer, StyledProjButton } from './headerStyles';
import { useAuth } from '../../../lib';

const HeaderSection = props => {
  const { auth } = useAuth();
  const [ displayNewProjectForm, setDisplayNewProjectForm  ] = useState(false);

  const toggleProjectForm = e => {
    setDisplayNewProjectForm(!displayNewProjectForm);
  };

  return (
    <StyledHeader>
      <ProjectContainer>
      { displayNewProjectForm ? <NewProjectForm onClose={toggleProjectForm} /> : <ProjectSelector selectedProject={auth.currentProject} /> }
        <StyledProjButton onClick={toggleProjectForm} />
      </ProjectContainer>
      <Typography variant='h2' sx={{ marginRight: '3.5rem', fontWeight: '300' }}>thoughtBoard.io</Typography>
    </StyledHeader>
  );
};

export default HeaderSection;
