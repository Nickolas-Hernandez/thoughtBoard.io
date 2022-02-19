import React, { useState } from 'react';
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

function ProjectSelector(props) {
  const { projects } = props;
  const [ selectedProject, setSelected ] = useState('');
  console.log('selected project: : ', selectedProject);

  let menuItems;
  if (projects === null) {
    menuItems = null;
  } else {
    menuItems = projects.map(project => {
      return <MenuItem value={project.title} key={project.id}>{project.title}</MenuItem>;
    });
  }

  const updateProject = event => {
    setSelected(event.target.value);
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel sx={styles.inputLabel} id="project-selector">Select Project</InputLabel>
      <Select
      labelId="project-selector"
      id="project-selector"
      placeholder="Select Project"
      IconComponent={() => <ArrowDropDownIcon sx={styles.icon}/>}
      MenuProps={dropDownMenuProps}
      value={selectedProject || ''}
      onChange={updateProject}
      // sx={styles.select}
      >
        { menuItems }
      </Select>
    </FormControl>
  );
}

export default ProjectSelector;
