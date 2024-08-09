/* DEPENDENCIES */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

/* DASHBOARD */
const Dashboard = () => {
  // Get user data
  const { loading, error, data } = useQuery(QUERY_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  const user = data?.me;
  console.log(user);
  if (!user) return <h2>It ain't here.</h2>;

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
            <h2>My crafts:</h2>
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
