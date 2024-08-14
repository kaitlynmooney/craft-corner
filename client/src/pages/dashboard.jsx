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
  const [draggedItems, setDraggedItems] = useState([]);

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
    // Initialize in-progress projects from localStorage
    const savedInProgressProjects = JSON.parse(localStorage.getItem('inProgressProjects')) || [];
    setInProgressProjects(savedInProgressProjects);
  }, [projectsData]);

  useEffect(() => {
    // Update local storage when draggedItems changes
    localStorage.setItem('draggedItems', JSON.stringify(draggedItems));
  }, [draggedItems]);

  useEffect(() => {
    // Update local storage when inProgressProjects changes
    localStorage.setItem('inProgressProjects', JSON.stringify(inProgressProjects));
  }, [inProgressProjects]);

  useEffect(() => {
    if (userData && projectsData) {
      const surveyResponses = JSON.parse(localStorage.getItem('surveyResponses')) || [];
      const projects = projectsData?.allProjects || []; 
      const surveyCompleted = localStorage.getItem('surveyCompleted') === 'true'; // Check if survey is completed

      if (surveyCompleted && surveyResponses.length > 0) {
        const recommendedProjectsDifficulty = getProjectsDifficulty(
          selectedDifficulty,
          projects
        );
        const recommendedProjectsPrice = getProjectsPrice(userData?.me?.pricePoint, projects, surveyResponses);
        const updatedRecommendations = [
          ...recommendedProjectsDifficulty,
          ...recommendedProjectsPrice,
        ];

        // Save the new recommendations to localStorage
        localStorage.setItem('recommendedProjects', JSON.stringify(updatedRecommendations));
      } else {
        // Clear recommendations if no survey responses are available
        localStorage.removeItem('recommendedProjects');
      }
    }
  }, [userData, selectedDifficulty, projectsData]);

  if (userLoading || projectsLoading) {
    return <div className="loading-spinner"></div>;
  }

  if (userError || projectsError) {
    throw new Error("Error fetching data");
  }

  const user = userData?.me;
  const projects = projectsData?.allProjects;

  // Retrieve recommended projects from localStorage
  const uniqueRecommendedProjects = JSON.parse(localStorage.getItem('recommendedProjects')) || [];
 
   // Ensure the recommended projects are unique by their IDs
   const uniqueProjectsMap = new Map();
   uniqueRecommendedProjects.forEach(project => {
     uniqueProjectsMap.set(project._id, project);
   });
 
   const uniqueRecommendedProjectsList = Array.from(uniqueProjectsMap.values());

  const handleNewProject = () => {
    navigate("/new-project", { state: { user } });
  };

  const handleMyProjects = () => {
    navigate("/my-projects", { state: { user } });
  };

  const handleDropChange = (index) => {
    const newDraggedItems = [...draggedItems];
    newDraggedItems[index] = !newDraggedItems[index];
    setDraggedItems(newDraggedItems);

    // Get project ID for the dragged item
    const projectId = projects[index]._id;
    console.log(projectId);

    // Update local storage with the dragged project ID
    const storedProjectIds = JSON.parse(localStorage.getItem('draggedProjectIds')) || [];

    if (newDraggedItems[index] && !storedProjectIds.includes(projectId)) {
      storedProjectIds.push(projectId);
    } else if (!newDraggedItems[index]) {
      const indexToRemove = storedProjectIds.indexOf(projectId);
      if (indexToRemove !== -1) storedProjectIds.splice(indexToRemove, 1);
    }

    localStorage.setItem('draggedProjectIds', JSON.stringify(storedProjectIds));
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
      // Check if the project is already in the list
      console.log(prevProjects);
      const isAlreadyInProgress = prevProjects.some(p => p._id === project._id);
      
      if (isAlreadyInProgress) {
        console.log('Project is already in the In-Progress section.');
        return prevProjects; // No update needed if it's already in progress
      }
  
      // Add the new project to the in-progress projects list
      const updatedProjects = [...prevProjects, project];
      console.log('Updated In-Progress Projects:', updatedProjects);
      
      // Update local storage
      localStorage.setItem('inProgressProjects', JSON.stringify(updatedProjects));
  
      return updatedProjects;
    });

    // Update the state of dragged items
    const index = projects.findIndex(p => p._id === projectInput._id);
    if (index !== -1) handleDropChange(index);

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
                inProgressProjects={inProgressProjects}
                setInProgressProjects={setInProgressProjects}
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
              {uniqueRecommendedProjects.length > 0 ? (
                <Projects user={user} projects={uniqueRecommendedProjectsList} />
              ) : (
                <h6>Complete the survey to see personalized recommendations.</h6>
              )}
            </div>
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default Dashboard;