/* DEPENDENCIES */
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { QUERY_ME, QUERY_ALL_PROJECTS } from "../utils/queries";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { getSavedProjects } from "../utils/savedProjects";
import SavedProjects from "../components/SavedProjects";
import {
  getProjectsDifficulty,
  getProjectsPrice,
} from "../utils/recommendedProjects";

/* DASHBOARD */
const Dashboard = () => {
  const navigate = useNavigate();

  const [userProjects, setSavedProjects] = useState([]);
  const location = useLocation();
  const selectedDifficulty = location.state?.difficulty;

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

  // Navigates to new project page on click
  const handleNewProject = () => {
    navigate("/new-project", { state: { user } });
  };

  // Navigates to my projects page on click
  const handleMyProjects = () => {
    navigate("/my-projects", { state: { user } });
  };

  const savedProjects = getSavedProjects();

  // Return dashboard, calls Profile and Projects components
  return (
    <div className="inter" id="dashboard">
      <h1 className="title">Hi {user.username}!</h1>
      <div id="dashboard-inner">
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
            <Projects user={user} projects={user.ongoingProjects} />
          </div>
          <div>
            <h2>Your Saved Projects:</h2>
            <SavedProjects
              savedProjects={savedProjects}
              allProjects={projects}
              setSavedProjects={setSavedProjects}
            />
          </div>
          <div>
            <h2>Recommended Projects:</h2>
            <Projects user={user} projects={uniqueRecommendedProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* EXPORTS */
export default Dashboard;
