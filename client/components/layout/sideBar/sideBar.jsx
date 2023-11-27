import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { StyledSideBar, StyledAddIcon, paperStyles } from './sideBarStyles';
import { useAuth } from '../../../lib';
import { createNote } from '../../../services';


const SideBar = props => {
  const { auth } = useAuth();
  const { currentProject } = auth;

  const createNewNote = async e => {
    console.log(e.target);
    console.log('add new note to side bar');
    // create a new note and send to db
    const newNote = await createNote(currentProject.id, currentProject.nextNoteId);
    console.log('newNote: ', newNote);
  };

  return (
  <StyledSideBar variant="permanent" anchor="left" PaperProps={{ style: paperStyles }}>
    {/* <List>{notesList}</List> */}
    { currentProject ? <StyledAddIcon onClick={createNewNote}></StyledAddIcon> : '' }
    {/* <StyledAddIcon onClick={ currentProject ? createNewNote : () => console.log('PLease select a project to add')}/> */}
  </StyledSideBar>
  );
};

export default SideBar;
