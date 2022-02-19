import React, { useState } from 'react';
import { Button } from '@mui/material';
import { StyledForm, StyledInput } from './newProjFormStyles';

const NewProjectForm = props => {
  const [ value, setValue ] = useState('');

  return (
    <StyledForm component='form' onSubmit={e => {
      e.preventDefault();
      props.submitNewProject(value);
    }}>
      <StyledInput
      onChange={e => setValue(e.target.value)}
      value={value}
      required
      />
      <Button type="submit" variant="contained">Submit</Button>
    </StyledForm>
  );
};

export default NewProjectForm;
