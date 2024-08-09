import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Profile from "../components/Profile";

const Dashboard = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const user = data.me;
  return (
    <div id="dashboard">
      <Profile user={user} />
      <CraftSection title="My Craft Closet" crafts={user.ongoingProjects} />
      <CraftSection title="Recommended For You" crafts={user.savedCrafts} />
    </div>
  );
};

export default Dashboard;
