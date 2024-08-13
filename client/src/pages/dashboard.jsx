/* DEPENDENCIES */
import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { QUERY_ME, QUERY_ALL_PROJECTS } from "../utils/queries";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { getSavedProjects } from '../utils/savedProjects';
import SavedProjects from "../components/SavedProjects";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  getProjectsDifficulty,
  getProjectsPrice,
} from "../utils/recommendedProjects";
import InProgressProjects from '../components/InProgressProjects';


/* DASHBOARD */
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedDifficulty = location.state?.difficulty;

  const [userProjects, setSavedProjects] = useState([]);
  const [inProgressProjects, setInProgressProjects] = useState([]);
  const savedProjects = getSavedProjects();

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(QUERY_ME);

  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery(QUERY_ALL_PROJECTS);

  useEffect(() => {
    // Initialize in-progress projects here, if needed
  }, [projectsData]);

  if (userLoading || projectsLoading) {
    return <div className="loading-spinner"></div>;
  }

  if (userError || projectsError) {
    throw new Error("Error fetching data");
  }

  const user = userData?.me;
  const projects = projectsData?.allProjects;

  const recommendedProjectsDifficulty = getProjectsDifficulty(
    selectedDifficulty,
    projects
  );
  const recommendedProjectsPrice = getProjectsPrice(user?.pricePoint, projects);
  const recommendedProjects = [
    ...recommendedProjectsDifficulty,
    ...recommendedProjectsPrice,
  ];
  const uniqueRecommendedProjects = Array.from(new Set(recommendedProjects));

  const handleNewProject = () => {
    navigate("/new-project", { state: { user } });
  };

  const handleMyProjects = () => {
    navigate("/my-projects", { state: { user } });
  };

  const handleDropProject = (projectInput) => {
    // Find the project object from allProjects using the projectId
    const project = projects.find((proj) => proj._id === projectInput._id);
    console.log(projects);
    console.log(project);

    if (!project) {
      console.error('Project not found:', project);
      return;
    }
  
    // Update the inProgressProjects state
    setInProgressProjects((prevProjects) => {
      const updatedProjects = [...prevProjects, project];
      console.log('Updated In-Progress Projects:', updatedProjects);
      return updatedProjects;
    });

    // Remove the project from savedProjects
    setSavedProjects((prevProjects) => {
      const updatedProjects = prevProjects.filter((proj) => proj._id !== project._id);
      // Update local storage
      const storedProjectIds = JSON.parse(localStorage.getItem('checkedProjectIds')) || [];
      const indexToRemove = storedProjectIds.indexOf(project._id);
      if (indexToRemove !== -1) {
        storedProjectIds.splice(indexToRemove, 1);
        localStorage.setItem('checkedProjectIds', JSON.stringify(storedProjectIds));
      }
      return updatedProjects;
    });

    console.log('Project dropped into In-Progress:', project);
    console.log('Current In-Progress Projects:', inProgressProjects);
  };

  return (
    <div className="inter" id="dashboard">
      <h1 className="title">Hi {user.username}!</h1>
      <div id="dashboard-inner">
        <DndProvider backend={HTML5Backend}>
          <div>
            <div className="borders" id="profile">
              <Profile user={user} />
            </div>
            <div
              className="borders dashboard-proj-button"
              id="create-new-proj-button"
              onClick={handleNewProject}
            >
              Create a new project <i className="fa-solid fa-plus"></i>
            </div>
            <div
              className="borders dashboard-proj-button"
              id="my-proj-button"
              onClick={handleMyProjects}
            >
              Projects you've created
            </div>
          </div>
          <div id="projects">
            <div>
              <h2>Your In-Progress Projects:</h2>
              <InProgressProjects 
                projects={inProgressProjects}
                handleDropProject={handleDropProject}
              />
            </div>
            <div>
              <h2>Your Saved Projects:</h2>
              <SavedProjects 
                savedProjects={savedProjects} 
                allProjects={projects} 
                setSavedProjects={setSavedProjects}
                handleDropProject={handleDropProject} 
              />
            </div>
            <div>
              <h2>Recommended Projects:</h2>
              <Projects user={user} projects={uniqueRecommendedProjects} />
            </div>
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default Dashboard;
