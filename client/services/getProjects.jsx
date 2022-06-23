const getProjects = async userId => { // move
  const response = await fetch(`/api/userProjects/${userId}`);
  const projectData = await response.json();
  return projectData;
};

export default getProjects;
