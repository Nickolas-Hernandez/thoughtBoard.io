import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { StyledSideBar, StyledAddIcon, paperStyles } from './sideBarStyles';
// import { useUser } from '../../../lib';

const SideBar = props => {
  // const userContext = useUser();
  // const { currentProject, notes, setProjectNotes } = userContext;

  // const createNewNote = async () => {
  //   const noteModel = {
  //     id: currentProject.nextNoteId, // fix this
  //     title: '',
  //     created: new Date(),
  //     lastUpdate: new Date(),
  //     data: ''
  //   };
  //   const response = await fetch(`/api/newNote/${currentProject.id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(noteModel)
  //   });
  //   const savedNote = await response.json();
  //   setProjectNotes();
  //   console.log('savedNote: ', savedNote);
  // };

  // const generateNotes = () => {
  //   if (!notes) return;
  //   const noteItems = () => {
  //     const noteList = notes.map(note => {
  //       return <Note key={note.id} title={note.title} lastUpdate={note.lastUpdate} data={note.data}/>;
  //     });
  //     return noteList;
  //   };
  //   return noteItems();
  // };
  // const notesList = generateNotes();

  // console.log('notes: ', notes);
  // console.log('notesList: ', notesList);

  return (
  <StyledSideBar variant="permanent" anchor="left" PaperProps={{ style: paperStyles }}>
    {/* <List>{notesList}</List> */}
    {/* <StyledAddIcon onClick={ currentProject ? createNewNote : () => console.log('no mames')}/> */}
  </StyledSideBar>
  );
};

// const Note = props => {
//   return (
//     <ListItem>
//       poop
//     </ListItem>
//   );
// };

export default SideBar;
