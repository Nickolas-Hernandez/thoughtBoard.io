import React, { useState } from 'react';
import { Button } from '@mui/material';
import { StyledForm, StyledInput } from './newProjFormStyles';

const NewProjectForm = props => {
  const [ value, setValue ] = useState('');

  return (
    <StyledForm component='form' variant="standard" onSubmit={event => {
      event.preventDefault();
      props.submitNewProject(value);
    }}>
      <StyledInput
      onChange={e => setValue(e.target.value)}
      value={value}
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
