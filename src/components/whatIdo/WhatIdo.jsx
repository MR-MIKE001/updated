import { useContext } from "react";
import "./whatido.css"
import { themeContext } from "../../contest";
import whatIdodata from "./whatIdoData";
import Card from "../cards/card";

function WhatIdo() {
 const darkMode = useContext(themeContext).state.darkMode;

  return (
    <div className='whatido' style={{background:darkMode?" #2f2f2f":" #c7bebeff"}}>
        <div className="whatido-content" >
        <h2>What I do</h2>
        <p style={{color:darkMode? "white":""}} >I specialize in building scalable, high-performance web applications that solve real-world problems, with a strong focus on backend development using .NET and Node.js. I design and implement robust APIs, efficient server-side architectures, and secure data-driven systems that power modern applications at scale.

While my core strength lies in backend engineering, I also bring solid frontend experience, building intuitive and responsive user interfaces with technologies like React. This allows me to deliver end-to-end, production-grade solutions that are reliable, efficient, and user-focused.

My goal is to build applications that are not just functional, but engineered for performance, scalability, and long-term maintainability.

<br/>I don’t just focus on making things work — I focus on making them:
        </p>
    </div>
     <div className="whatido-cards">
      {whatIdodata.map((item)=>{
        return<div> <Card key={item.id} heading={item.title} details={item.description}/></div>
      })}
      </div>
    
    </div>
  )
}

export default WhatIdo