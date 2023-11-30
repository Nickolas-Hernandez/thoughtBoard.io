const deleteNote = async note => {
    console.log('note: ', note);
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`/api/notes/${note.noteId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer: ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const confirmation = await response.json();
    console.log('confirmation: ', confirmation);
  } catch (err) {
    console.error(err);
  }
};

export default deleteNote;
