import React from 'react';
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem  from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { fontSize } from '@mui/system';

const styles = {
  select: {
    borderColor: "white",
    backgroundColor: "white",
  },
  icon: {
    color: "white"
  },
  formControl: {
    m: '1',
    width: '250px',
    fontSize: "1rem"
  }
};

const dropDownMenuProps = {
  MenuListProps: {
    sx: {
      backgroundColor: "black",
    }
  }
}

const ProjectSelector = () => {

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel sx={{color: "white", backgroundColor: '#2C2C31'}} id="project-selector">Select Project</InputLabel>
      <Select
      labelId="project-selector"
      id="project-selector"
      placeholder="Select Project"
      IconComponent={() => <ArrowDropDownIcon sx={styles.icon}/>}
      MenuProps={dropDownMenuProps}
      // sx={stylesGlobal.select}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="Project">Project 1</MenuItem>
        <MenuItem value="Project-2">Project 2</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ProjectSelector;
