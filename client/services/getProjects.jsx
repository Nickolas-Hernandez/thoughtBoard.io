const getProjects = async userId => {
  try { // move
    const response = await fetch(`/api/userProjects/${userId}`);
    const projectData = await response.json();
    return projectData;
  } catch (err) {
    console.error(err);
  }
};

export default getProjects;
