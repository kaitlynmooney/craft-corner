/* DEPENDENCIES */
// import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from 'react-router-dom';
import { QUERY_ME, QUERY_ALL_PROJECTS } from "../utils/queries";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { getProjectsDifficulty, getProjectsPrice } from "../utils/recommendedProjects";

/* DASHBOARD */
const Dashboard = () => {
  const location = useLocation();
  const selectedDifficulty = location.state?.difficulty; // Access selected difficulty from props

 // Get user data
 const { loading: userLoading, error: userError, data: userData } = useQuery(QUERY_ME);
 const user = userData?.me;
 console.log(user);

 // Get project data
 const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(QUERY_ALL_PROJECTS);
 const projects = projectsData?.allProjects;

 // Handle loading and error states
 if (userLoading || projectsLoading) return <p>Loading...</p>;
 if (userError|| projectsError) throw Error;

  // Get recommended projects based on user preferences
  const recommendedProjectsDifficulty = getProjectsDifficulty(selectedDifficulty, projects);
  const recommendedProjectsPrice = getProjectsPrice(user.pricePoint, projects);
  const recommendedProjects = [...recommendedProjectsDifficulty, ...recommendedProjectsPrice];
  const uniqueRecommendedProjects = Array.from(new Set(recommendedProjects));

  // Return dashboard, calls Profile and UserCrafts components
  return (
    <div className="inter" id="dashboard">
      <h1 className="title">Hi {user.username}!</h1>
      <div id="dashboard-inner">
        <div className="borders" id="profile">
          <Profile user={user} />
        </div>
        <div id="projects">
          <div>
            <h2>Your In-Progress Crafts:</h2>
            <Projects crafts={user.ongoingProjects} />
          </div>
          <div>
            <h2>Your Saved Crafts:</h2>
            <Projects crafts={user.savedCrafts} />
          </div>
          <div>
            <h2>Recommended Projects:</h2>
            <Projects crafts={uniqueRecommendedProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* EXPORTS */
export default Dashboard;
