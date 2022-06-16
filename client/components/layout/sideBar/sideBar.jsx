import React from 'react';
import { List, ListItem } from '@mui/material';
import { StyledSideBar, StyledAddIcon, paperStyles } from './sideBarStyles';

const SideBar = props => {
  return (
  <StyledSideBar variant="permanent" anchor="left" open='false' PaperProps={{ style: paperStyles }}>
    <List>
      <ListItem>
        <StyledAddIcon />
      </ListItem>
    </List>
  </StyledSideBar>
  );
};

export default SideBar;
