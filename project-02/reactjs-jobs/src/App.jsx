import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import JobListings from "./Components/JobListings";
import ViewAllJobs from "./Components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {
  return (
    <RouterProvider router={router} />
    // <>
    //   <NavBar />
    //   <Hero
    //     title="Become a React Dev"
    //     subtitle="Find the React job that fits your skills and needs"
    //   />
    //   <HomeCards />
    //   <JobListings />
    //   <ViewAllJobs />
    // </>
  );
};

export default App;
