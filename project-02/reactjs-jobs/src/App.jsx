import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import JobListings from "./Components/JobListings";
import ViewAllJobs from "./Components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
