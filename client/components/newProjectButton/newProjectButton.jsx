import React from 'react';
import StyledProjButton from './newProjButtonStyles';

const NewProjectButton = props => {
  return (
    <StyledProjButton onClick={props.openNewProject}>New Project</StyledProjButton>
  );
};

export default NewProjectButton;
