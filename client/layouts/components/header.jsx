import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/box';
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button  from "@mui/material/button";

export default function () {
  const theme = useTheme();

  const boxStyle = {
    backgroundColor: '#545F6A',
    color: '#FAF9F6',
    height: '90px',
    padding: '.5rem 1rem',
    display: 'flex',
    alignItems: 'flex-end',
    borderBottom: '1px solid black'
  }

  return (
    <Box sx={boxStyle}>
      <Typography variant='h2'>thoughtBoard.io</Typography>
    </Box>
  );
}
