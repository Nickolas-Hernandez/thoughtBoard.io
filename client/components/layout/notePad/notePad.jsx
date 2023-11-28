import React from 'react';
import { Box, Typography } from '@mui/material';

const NotePad = ({ note }) => {

  if (!note) {
    return (
        <Typography>Please select a note.</Typography>
    );
  }

  return (
    <Box>
      <Typography variant='h4'>NotePanel</Typography>
    </Box>
  );
};

export default NotePad;
