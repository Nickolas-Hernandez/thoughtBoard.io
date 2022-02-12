import React from 'react';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const styles = {
  select: {
    borderColor: 'white',
    backgroundColor: 'white'
  },
  icon: {
    color: 'white'
  },
  formControl: {
    m: '1',
    width: '250px',
    fontSize: '1rem'
  },
  inputLabel: {
    color: 'white',
    backgroundColor: '#2C2C31'
  }
};

const dropDownMenuProps = {
  MenuListProps: {
    sx: {
      backgroundColor: 'black'
    }
  }
};

const ProjectSelector = () => {

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel sx={styles.inputLabel} id="project-selector">Select Project</InputLabel>
      <Select
      labelId="project-selector"
      id="project-selector"
      placeholder="Select Project"
      IconComponent={() => <ArrowDropDownIcon sx={styles.icon}/>}
      MenuProps={dropDownMenuProps}
      // sx={styles.select}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="Project">Project 1</MenuItem>
        <MenuItem value="Project-2">Project 2</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ProjectSelector;
