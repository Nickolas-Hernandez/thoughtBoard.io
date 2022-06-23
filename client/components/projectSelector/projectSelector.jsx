import React from 'react';
import { MenuItem } from '@mui/material';
import { useUser } from '../../lib';
import {
  SytledProjSelector,
  StyledLabel,
  StyledSelect,
  StyledIcon,
  MenuProps
} from './projSelectorStyles';

const ProjectSelector = props => {
  const userContext = useUser();
  const { projects, currentProject } = userContext;
  let menuItems = null;
  if (projects) {
    menuItems = projects.map(project => {
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
      value={currentProject.project || ''}
      onChange={event => userContext.setCurrent(event.target.value)}
      >
        { menuItems }
      </StyledSelect>
    </SytledProjSelector>
  );
};

export default ProjectSelector;
