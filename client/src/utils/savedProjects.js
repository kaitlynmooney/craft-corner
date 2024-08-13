export const getSavedProjects = () => {
    // Retrieve the JSON string from local storage
    const storedCheckedProjectIds = localStorage.getItem('checkedProjectIds');
  
    // Initialize an empty array for saved projects
    const savedProjects = [];
  
    try {
      // Parse the JSON string into an array of IDs
      const checkedProjectIds = JSON.parse(storedCheckedProjectIds);
  
      // Check if the parsed data is an array
      if (Array.isArray(checkedProjectIds)) {
        // Push each ID into the savedProjects array
        checkedProjectIds.forEach(id => {
          savedProjects.push(id);
        });
      } else {
        console.warn('Stored data is not an array.');
      }
    } catch (error) {
      console.error('Failed to parse stored project IDs from local storage:', error);
    }
  
    // Return the new array of saved projects
    console.log(savedProjects);
    return savedProjects;
};
  