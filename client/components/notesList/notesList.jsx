import React from 'react';
import { List, ListItem, IconButton, ListItemText } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { convertToReadableDate, useAuth } from '../../lib';
import { deleteNote } from '../../services';

const NotesList = ({ notes }) => {
  const { auth, setSelectedNote } = useAuth();
  const { selectedNote } = auth;

  const editNote = note => {
    setSelectedNote(note);
  };

  const trashNote = note => {
    deleteNote(note);
  };

  return (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#2C2C31' }}>
  {notes.map(note => (
    <ListItem
    key={note.id}
    className='notes-list__note-item'
    sx={{
      background: selectedNote && (selectedNote.id === note.id) ? '#333339' : '#2C2C31',
      borderRadius: '4px'
    }}
    secondaryAction={
      <>
        <IconButton onClick={() => editNote(note)} aria-label="edit">
          <EditNoteIcon sx={{ fill: 'white' }}/>
        </IconButton>
        <IconButton onClick={() => trashNote(note)} aria-label="delete">
          <DeleteOutlineIcon sx={{ fill: 'white' }}/>
        </IconButton>
      </>
    }>
    <ListItemText
    primary={`${note.title} ${note.id}`}
    secondary={convertToReadableDate(note.lastEdited)}
    secondaryTypographyProps={{ color: 'rgba(255, 255, 255, .7)', fontWeight: 300 }}
    sx={{ bgcolor: selectedNote && (selectedNote.id === note.id) ? '#333339' : '#2C2C31' }}/>
    </ListItem>
  ))}
  </List>
  );
};

export default NotesList;
