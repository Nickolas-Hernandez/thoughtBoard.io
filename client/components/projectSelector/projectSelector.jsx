import React from 'react';
import { MenuItem } from '@mui/material';
import {
  SytledProjSelector,
  StyledLabel,
  StyledSelect,
  StyledIcon,
  MenuProps
} from './projSelectorStyles';

const ProjectSelector = props => {
  const { projects } = props;

  let menuItems;
  if (projects === null) {
    menuItems = null;
  } else {
    menuItems = projects.map(project => {
      return <MenuItem value={project.title} key={project.id}>{project.title}</MenuItem>;
    });
  }

  return (
    <SytledProjSelector>
      <StyledLabel id="project-selector">Select Project</StyledLabel>
      <StyledSelect
      labelId="project-selector-label"
      id="project-selector"
      placeholder="Select Project"
      IconComponent={() => <StyledIcon />}
      MenuProps={MenuProps}
      value={props.selectedProject || ''}
      onChange={props.selectProject}
      >
        { menuItems }
      </StyledSelect>
    </SytledProjSelector>
  );
};

export default ProjectSelector;
