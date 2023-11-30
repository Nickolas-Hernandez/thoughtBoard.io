import React from 'react';
import { StyledSideBar, StyledAddIcon, paperStyles } from './sideBarStyles';
import NotesList from '../../notesList';
import { useAuth } from '../../../lib';
import { createNote } from '../../../services';

const SideBar = props => {
  const { auth, appendNewNote } = useAuth();
  const { currentProject, currentNotes } = auth;

  const createNewNote = async e => {
    const newNote = await createNote(currentProject.id, currentProject.nextNoteId);
    appendNewNote(newNote.savedNote);
  };

  return (
  <StyledSideBar variant="permanent" anchor="left" PaperProps={{ style: paperStyles }}>
    {(currentNotes && currentNotes.length > 0) ? <NotesList notes={currentNotes} /> : ''}
    { currentProject ? <StyledAddIcon onClick={createNewNote}></StyledAddIcon> : '' }
  </StyledSideBar>
  );
};

export default SideBar;
