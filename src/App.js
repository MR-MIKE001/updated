import { useContext } from "react";
import Nav from "./components/navbars/nav";
import Intro from "./components/intro/intro";
import { themeContext } from "./contest";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Work from "./components/works/work";
import Portfolio from "./components/portfolio/portfolio";
import Contact from './components/contact/contact.jsx'
import Foot from "./components/footer/foot";
import './App.css'
function App() {
  
  const theme=useContext(themeContext)
  const dark=theme.state.darkMode
  return (
    <div className="APP" 
    style={{
      background:dark? 'black':'',
      color:dark? 'white':''
    }}>
      <Nav/>
      <Intro/>
      <Services/>
      <Work/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Foot/>
      
    </div>
  )
}

export default App;
