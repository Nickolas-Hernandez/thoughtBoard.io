import React, { useState } from 'react';
import { FormControl, FormLabel, TextField, Button, Box } from '@mui/material';
import { style } from '@mui/system';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'row'
  },
  formLabel: {
    color: 'white'
  },
  textField: {
    color: 'white'
  }
}

const NewProjectForm = (props) => {
  const [ value, setValue ] = useState('')

  return(
    <Box component="form" onSubmit={(e) => {
      e.preventDefault();
      props.submitNewProject(value);
    }} sx={styles.form}>
      <TextField
      onChange={(e) => setValue(e.target.value)}
      value={value}
      sx={styles.textField}
      label="Project Name"
      variant="standard"
      required
      />
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  );
};

export default NewProjectForm;
