import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { StyledSideBar, StyledAddIcon, paperStyles } from './sideBarStyles';

const SideBar = props => {
  // create state to hold notes
  const [ notes, setNotes ] = useState([]);

  const createNewNote = () => {
    // create new li for note and append to notes array
    const noteModel = {
      id: notes.length - 1, // fix this
      title: '',
      created: new Date(),
      lastUpdate: new Date(),
      data: ''
    };
  };

  // map notes

  return (
  <StyledSideBar variant="permanent" anchor="left" PaperProps={{ style: paperStyles }}>
    <List>

    </List>
    <StyledAddIcon onClick={createNewNote}/>
  </StyledSideBar>
  );
};

export default SideBar;
