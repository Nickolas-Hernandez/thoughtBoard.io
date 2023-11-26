import React, { useState } from 'react';
import { Button } from '@mui/material';
import { StyledForm, StyledInput } from './newProjFormStyles';
import { createProject } from '../../services';
import { useAuth } from '../../lib';

const NewProjectForm = props => {
  const { auth, setCurrentProject, appendNewProject } = useAuth();
  const [ projectName, setProjectName ] = useState('');

  const submitNewProject = async e => {
    e.preventDefault();
    const owner = auth.userDetails.id;
    const newProject = await createProject({ projectName, owner });
    setCurrentProject(newProject);
    appendNewProject(newProject);
  };

  return (
    <StyledForm component='form' variant="standard" onSubmit={submitNewProject}>
      <StyledInput
      onChange={e => setProjectName(e.target.value)}
      value={projectName}
      variant='standard'
      label='Project Name'
      sx={{ label: { color: 'white' }, borderBottom: '1px solid white' }}
      required
      />
      <Button type="submit" variant="standard" sx={{ marginLeft: '1rem', fontSize: '18px' }}>Submit</Button>
    </StyledForm>
  );
};

export default NewProjectForm;
