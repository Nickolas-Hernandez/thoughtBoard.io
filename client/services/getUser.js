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
    return userDetails;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export default getUser;
