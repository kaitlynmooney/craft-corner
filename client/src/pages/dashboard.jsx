/* DEPENDENCIES */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

/* DASHBOARD */
const Dashboard = () => {
  // Crafter status names
  const statuses = [
    "Newbie",
    "Expert",
    "Pro",
    "Craft Master",
    "Crafting Conoisseur",
  ];

  // Get user data
  const { loading, error, data } = useQuery(QUERY_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const user = data?.me;

  // If user not found, return error message
  if (!user)
    return (
      <h1 className="inter title" id="dashboard-user-error">
        No user found.
      </h1>
    );

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
        </div>
      </div>
    </div>
  );
};

/* EXPORTS */
export default Dashboard;
