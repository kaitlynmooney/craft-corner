/* DEPENDENCIES */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_ALL_PROJECTS } from "../utils/queries";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { getProjectsDifficulty, getProjectsPrice } from "../utils/recommendedProjects";

/* DASHBOARD */
const Dashboard = () => {
  // Get user data
  const { loading, error, data } = useQuery(QUERY_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const user = data?.me;
  console.log(user);

  // If user not found, return error message
  if (!user)
    return (
      <h1 className="inter title" id="dashboard-user-error">
        No user found.
      </h1>
  );

  // Get project data
  const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(QUERY_ALL_PROJECTS);
  const projects = projectsData?.allProjects;

  // Get recommended projects based on user preferences
  const recommendedProjectsDifficulty = getProjectsDifficulty(user.difficulty, projects);
  const recommendedProjectsPrice = getProjectsPrice(user.pricePoint, projects);
  const recommendedProjects = [...recommendedProjectsDifficulty, ...recommendedProjectsPrice];

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
            <h2>Your crafts:</h2>
            <Projects crafts={user.ongoingProjects} />
          </div>
          <div>
            <h2>Pick your next project:</h2>
            <Projects crafts={user.savedCrafts} />
          </div>
          <div>
            <h2>Recommended Projects:</h2>
            <Projects crafts={recommendedProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* EXPORTS */
export default Dashboard;
