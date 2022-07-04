const getNotes = async projectId => {
  const notesJSON = await fetch(`/api/getNotes/${projectId}`);
  const notes = await notesJSON.json();
  return notes;
};
