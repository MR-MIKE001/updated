import { useContext } from "react";
import { themeContext } from "./contest";
import './App.css'
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import React, { Suspense } from "react";
function App() {
  const About = React.lazy(() => import("./pages/AboutPage"));
  const Experience = React.lazy(() => import("./pages/ExperiencePage"));
  const Services = React.lazy(() => import("./pages/ServicesPage"));
  const Home = React.lazy(() => import("./pages/LandingPage"));
  const theme=useContext(themeContext)
  const dark=theme.state.darkMode
  return (
    <div className="APP" 
    style={{
      background:dark? 'black':'',
      color:dark? 'white':''
    }}>
     <Routes>
      <Route path="/" element={
        <Suspense fallback={<LoadingPage />}>
          <Home />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={<LoadingPage />}>
          <About />
        </Suspense>
      } />
      <Route path="/experience" element={
        <Suspense fallback={<LoadingPage />}>
          <Experience />
        </Suspense>
      } />
      <Route path="/services" element={
        <Suspense fallback={<LoadingPage />}>
          <Services />
        </Suspense>
      } />
     
     </Routes>
      
      
    </div>
  )
}

export default App;
