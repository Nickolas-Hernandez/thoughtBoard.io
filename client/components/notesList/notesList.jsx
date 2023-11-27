import React from 'react';
import { List, ListItem, IconButton, ListItemText } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { convertToReadableDate } from '../../lib';

const NotesList = ({ notes }) => {
  const editNote = e => {
    console.log('note is being editted');
  };

  const deleteNote = e => {
    console.log('note should be deleted');
  };

  console.log('note[0]: ', notes[0]);

  return (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#2C2C31' }}>
  {notes.map(note => (
    <ListItem
    key={note.noteId}
    secondaryAction={
      <>
        <IconButton onClick={editNote} aria-label="edit">
          <EditNoteIcon sx={{ fill: 'white' }}/>
        </IconButton>
        <IconButton onClick={deleteNote} aria-label="delete">
          <DeleteOutlineIcon sx={{ fill: 'white' }}/>
        </IconButton>
      </>
    }>
    <ListItemText
    primary={note.title}
    secondary={convertToReadableDate(note.lastEdited)}
    secondaryTypographyProps={{ color: 'rgba(255, 255, 255, .7)', fontWeight: 300 }}
    sx={{ bgcolor: '#2C2C31' }}/>
    </ListItem>
  ))}
  </List>
  );
};

export default NotesList;
