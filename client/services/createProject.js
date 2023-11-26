const getProjects = async ({ projectName, owner }) => {
  const payload = {
    projectName,
    owner
  };
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/newProject', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const projectData = await response.json();
    return projectData;
  } catch (err) {
    console.error(err);
  }
};

export default getProjects;
