import React from 'react';
import { FormControl, FormLabel, TextField, Button } from '@mui/material';
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

const NewProjectForm = () => {
  return(
    <FormControl sx={styles.form}>
      <TextField  sx={styles.textField} label="Project Name"  variant="standard" required/>
      <Button type="submit" variant="contained">Submit</Button>
    </FormControl>
  );
};

export default NewProjectForm;
