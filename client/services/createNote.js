const createNote = async (projectId, noteId) => {
  const token = localStorage.getItem('token');
  const payload = {
    projectId,
    noteId
  };
  try {
    const response = await fetch('/api/newNote', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const newNote = await response.json();
    console.log('returned note note: ', newNote);
    return newNote;
  } catch (err) {
    console.error(err);
  }
};

export default createNote;
