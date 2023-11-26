import React from 'react';
import { Typography } from '@mui/material';
import ProjectSelector from '../../projectSelector';
import NewProjectButton from '../../newProjectButton';
import NewProjectForm from '../../newProjectForm';
import { StyledHeader, ProjectContainer } from './headerStyles';

const HeaderSection = props => {
  return (
    <StyledHeader>
      <ProjectContainer>
      <NewProjectForm />
        {/* {state.displayNewProjectForm ? <NewProjectForm submitNewProject={submitProjectName} /> : <ProjectSelector selectProject={selectProject} selectedProject={userContext.currentProject} />} */}
        <NewProjectButton />
        {/* <NewProjectButton openNewProject={handleNewProject} /> */}
      </ProjectContainer>
      <Typography variant='h2' sx={{ marginRight: '3.5rem', fontWeight: '300' }}>thoughtBoard.io</Typography>
    </StyledHeader>
  );
};

export default HeaderSection;
