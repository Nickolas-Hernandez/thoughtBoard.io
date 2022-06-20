import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { StyledSideBar, StyledAddIcon, paperStyles } from './sideBarStyles';

const SideBar = props => {
  // create state to hold notes
  const [ notes, setNotes ] = useState([]);

  const createNewNote = () => {
    // create new note and append to notes array
    const noteModel = {
      id: notes.length - 1, // fix this
      title: '',
      created: new Date(),
      lastUpdate: new Date(),
      data: ''
    };
    setNotes(notes => {
      return [ ...notes, noteModel ];
    });
  };
  // map notes

  const noteItems = notes.map(note => {
    return <Note key={note.id} title={note.title} lastUpdate={note.lastUpdate} data={note.data}/>;
  });

  return (
  <StyledSideBar variant="permanent" anchor="left" PaperProps={{ style: paperStyles }}>
    <List>{noteItems}</List>
    <StyledAddIcon onClick={createNewNote}/>
  </StyledSideBar>
  );
};

const Note = props => {
  return (
    <li>
      poop
    </li>
  );
};

export default SideBar;
