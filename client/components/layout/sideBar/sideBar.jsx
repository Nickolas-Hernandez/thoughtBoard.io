import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { StyledSideBar, StyledAddIcon, paperStyles } from './sideBarStyles';
import { useUser } from '../../../lib';

const SideBar = props => {
  const userContext = useUser();
  const { currentProject, notes } = userContext;
  console.log('notes: ', notes);

  const createNewNote = () => {
    const noteModel = {
      id: currentProject.nextNoteId, // fix this
      title: '',
      created: new Date(),
      lastUpdate: new Date(),
      data: ''
    };
  };

  const generateNotes = () => {
    if (!notes) return;
    const noteItems = () => {
      notes.map(note => {
        return <Note key={note.id} title={note.title} lastUpdate={note.lastUpdate} data={note.data}/>;
      });
      return noteItems;
    };
  };
  const notesList = generateNotes();

  return (
  <StyledSideBar variant="permanent" anchor="left" PaperProps={{ style: paperStyles }}>
    <List>{notesList}</List>
    <StyledAddIcon onClick={ currentProject ? createNewNote : () => console.log('no mames')}/>
  </StyledSideBar>
  );
};

const Note = props => {
  return (
    <ListItem>
      poop
    </ListItem>
  );
};

export default SideBar;
