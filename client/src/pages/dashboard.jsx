/* DEPENDENCIES */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Profile from "../components/Profile";

/* DASHBOARD */
const Dashboard = () => {
  // Get user data
  const { loading, error, data } = useQuery(QUERY_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const user = data.me;

  // Return dashboard, calls Profile and UserCrafts components
  return (
    <div id="dashboard">
      <h1>Hi {user.username}!</h1>
      <div>
        <Profile user={user} />
        <div>
          <h2>My crafts:</h2>
          <Crafts crafts={user.ongoingProjects} />
        </div>
        <div>
          <h2>Pick your next project:</h2>
          <Crafts crafts={user.savedCrafts} />
        </div>
      </div>
    </div>
  );
};

/* EXPORTS */
export default Dashboard;
