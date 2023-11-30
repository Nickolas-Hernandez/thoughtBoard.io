import React from 'react';
import { Box, Typography } from '@mui/material';

const NotePad = ({ note }) => {

  if (!note) {
    return (
      <Box sx={{ width: '100%', backgroundColor: '#5a5a64', color: '#FAF9F6', padding: '15px' }}>
        <Typography>Please select a note.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', backgroundColor: '#5a5a64', color: '#FAF9F6', padding: '15px' }}>
      <Typography variant='h3'>Note Title: {note.title}</Typography>
      <Typography variant='body1'>Last Edit: {note.lastEdited}</Typography>
      <Typography variant='body1'>Note id = { note.id }</Typography>
      <Typography variant='body1'>Note Data: {note.data}</Typography>
    </Box>
  );
};

export default NotePad;
