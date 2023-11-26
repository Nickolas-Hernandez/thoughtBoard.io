import React, { useState } from 'react';
import { Button } from '@mui/material';
import { StyledForm, StyledInput } from './newProjFormStyles';
import { createProject } from '../../services';
import { useAuth } from '../../lib';

const NewProjectForm = props => {
  const { auth } = useAuth();
  const [ projectName, setProjectName ] = useState('');

  const submitNewProject = e => {
    e.preventDefault();
    console.log(projectName);
    // send new rpoject to api
    const owner = auth.userDetails.id;
    createProject({ projectName, owner });

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
