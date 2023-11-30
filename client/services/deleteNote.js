const deleteNote = async note => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`/api/notes/${note.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer: ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const confirmation = await response.text();
    if (response.status === 200) {
      console.log('confirmation: ', confirmation);
    }
  } catch (err) {
    console.error(err);
  }
};

export default deleteNote;
