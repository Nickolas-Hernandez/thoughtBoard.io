import React from 'react';
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem  from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const stylesGlobal = {
  select: {
    borderColor: "white",
    backgroundColor: "white"
  },
  icon: {
    color: "white"
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
  const styles = {
    m: '1',
    width: '250px',
  }

  return (
    <FormControl sx={styles}>
      <InputLabel sx={{color: "white", backgroundColor: '#2C2C31'}} id="project-selector">Select Project</InputLabel>
      <Select
      labelId="project-selector"
      id="project-selector"
      placeholder="Select Project"
      IconComponent={() => <ArrowDropDownIcon sx={stylesGlobal.icon}/>}
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
