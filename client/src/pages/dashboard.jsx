/* DEPENDENCIES */
// import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { useLocation } from 'react-router-dom';
import { QUERY_ME, QUERY_ALL_PROJECTS } from "../utils/queries";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import SavedProjects from "../components/savedProjects";
import { getSavedProjects } from '../utils/savedProjects';
import { getProjectsDifficulty, getProjectsPrice } from "../utils/recommendedProjects";

/* DASHBOARD */
const Dashboard = () => {
  const location = useLocation();
  const selectedDifficulty = location.state?.difficulty;

  const { loading: userLoading, error: userError, data: userData } = useQuery(QUERY_ME);
  const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(QUERY_ALL_PROJECTS);

  if (userLoading || projectsLoading) {
    return <p>Loading...</p>;
  }
  
  if (userError || projectsError) {
    throw new Error("Error fetching data");
  }

  const user = userData?.me;
  const projects = projectsData?.allProjects;

  const recommendedProjectsDifficulty = getProjectsDifficulty(selectedDifficulty, projects);
  const recommendedProjectsPrice = getProjectsPrice(user?.pricePoint, projects);
  const recommendedProjects = [...recommendedProjectsDifficulty, ...recommendedProjectsPrice];
  const uniqueRecommendedProjects = Array.from(new Set(recommendedProjects));

  const savedProjects = getSavedProjects();


  // Return dashboard, calls Profile and Projects components
  return (
    <div className="inter" id="dashboard">
      <h1 className="title">Hi {user.username}!</h1>
      <div id="dashboard-inner">
        <div className="borders" id="profile">
          <Profile user={user} />
        </div>
        <div id="projects">
          <div>
            <h2>Your In-Progress Projects:</h2>
            <Projects user={user} projects={user.ongoingProjects} />
          </div>
          <div>
            <h2>Your Saved Projects:</h2>
            <SavedProjects savedProjects={savedProjects} allProjects={projects}/>
          </div>
          <div>
            <h2>Recommended Projects:</h2>
            <Projects user={user} projects={uniqueRecommendedProjects}/>
        </div>
        </div>
      </div>
    </div>
  );
};

/* EXPORTS */
export default Dashboard;
