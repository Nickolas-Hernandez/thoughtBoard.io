import React from 'react';
import { MenuItem } from '@mui/material';
import { useAuth } from '../../lib';

import {
  SytledProjSelector,
  StyledLabel,
  StyledSelect,
  StyledIcon,
  MenuProps
} from './projSelectorStyles';

const ProjectSelector = props => {
  const { auth, setCurrentProject } = useAuth();
  const { userProjects, currentProject } = auth;
  let menuItems = null;

  if (userProjects) {
    menuItems = userProjects.map(project => {
      return <MenuItem value={project.title} key={project.id}>{project.title}</MenuItem>;
    });
  }

  return (
    <SytledProjSelector variant="standard" sx={{ color: 'white' }}>
      <StyledLabel variant="standard" id="project-selector" sx={{ zIndex: 1000 }}>Select Project</StyledLabel>
      <StyledSelect
      labelId="project-selector-label"
      id="project-selector"
      placeholder="Select Project"
      IconComponent={() => <StyledIcon />}
      MenuProps={MenuProps}
      value={currentProject ? currentProject.title : ''}
      onChange={event => {
        let project;
        for (let i = 0; i < userProjects.length; i++) {
          if (event.target.value === userProjects[i].title) {
            project = userProjects[i];
          }
        }
        setCurrentProject(project);
      }}
      >
        { menuItems }
      </StyledSelect>
    </SytledProjSelector>
  );
};

export default ProjectSelector;
