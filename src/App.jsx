import './App.css'
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import React, { Suspense } from "react";

const About = React.lazy(() => import("./pages/AboutPage"));
const Experience = React.lazy(() => import("./pages/ExperiencePage"));
const Services = React.lazy(() => import("./pages/ServicesPage"));
const Home = React.lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
