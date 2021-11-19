import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/box';
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button  from "@mui/material/button";

export default function () {
  const theme = useTheme();

  const boxStyle = {
    backgroundColor: "#545F6A",
    color: '#FAF9F6',
    padding: ".5rem 1rem"
  }

  return (
    <Box sx={boxStyle}>
      <Typography variant="h2">thoughtBoard.io</Typography>
    </Box>
  );
}
