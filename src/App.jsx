import { useContext } from "react";

import { themeContext } from "./contest";

import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ServicesPage from "./pages/ServicesPage";
function App() {
  
  const theme=useContext(themeContext)
  const dark=theme.state.darkMode
  return (
    <div className="APP" 
    style={{
      background:dark? 'black':'',
      color:dark? 'white':''
    }}>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/services" element={<ServicesPage />} />
     
     </Routes>
      
      
    </div>
  )
}

export default App;
