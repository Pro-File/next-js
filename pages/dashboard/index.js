import React from "react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    const res = await fetch("http://localhost:4000/dashboard");
    const data = await res.json();
    setDashboardData(data);
    setLoading(false);
    console.log("dashbord: ", data);
  };

  return (
    <div>
      {loading ? (
        <h2>Loading.... </h2>
      ) : (
        <>
          <h1>Dashboard</h1>
          <h3>Posts: {dashboardData.posts}</h3>
          <h3>Followers: {dashboardData.followers}</h3>
          <h3>Following: {dashboardData.following}</h3>
          <h3>Likes: {dashboardData.likes}</h3>
        </>
      )}
    </div>
  );
};

export default Dashboard;
