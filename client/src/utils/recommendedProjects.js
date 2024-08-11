export const getProjectsDifficulty = (userResponse, projects) => {
    const matchingProjects = projects.filter(project => {
        return project.difficulty === (userResponse === 1 ? "Newbie" : userResponse === 2 ? "Casual" : "Pro");
    });

    return matchingProjects.slice(0, 3);
};

export const getProjectsPrice = (userResponse, projects) => {
    const matchingProjects = projects.filter(project => {
        return project.pricePoint === (userResponse === '$' ? '$' : userResponse === '$$' ? '$$' : '$$$'); 
    });

    return matchingProjects.slice(0, 3);
};