const getNotes = async projectId => {
  const token = localStorage.getItem('token');
  try {
    const notesJSON = await fetch(`/api/getNotes/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const notes = await notesJSON.json();
    return notes;
  } catch (err) {
    console.error(err);
  }
};

export default getNotes;
