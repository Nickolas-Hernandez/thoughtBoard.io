const getNotes = async projectId => {
  try {
    const notesJSON = await fetch(`/api/getNotes/${projectId}`);
    const notes = await notesJSON.json();
    return notes;
  } catch (err) {
    console.error(err);
  }
};

export default getNotes;
