import { useContext } from "react";
import { themeContext } from "../../contest";
import Card from "../cards/card"
import "./SService.css"
import serviceData from "./servicesData"
function SService() {
     const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  return (
    <div style={{background:darkMode?" #2f2f2f":" #c7bebeff"}} className="service">
        <h2>Services</h2>
        <p style={{color:darkMode?"white":""}}>Some of the services I offer include:</p>
        <div className="whatido-cards">

            {serviceData.map(service=>(
                <div key={service.id} className='service-card'>
                    <Card heading={service.heading} details={service.deatals}/>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default SService