const getUser = async token => {
  try {
    const response = await fetch('/api/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userDetails = await response.json();
    return userDetails; // This should be the user details object returned from the server
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error; // Re-throwing the error is important so the caller can handle it
  }
};

export default getUser;
