const getProjects = async userId => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/userProjects/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const projectData = await response.json();
    return projectData;
  } catch (err) {
    console.error(err);
  }
};

export default getProjects;
