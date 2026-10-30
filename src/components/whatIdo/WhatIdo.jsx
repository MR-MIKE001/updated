import "./whatido.css"
import whatIdodata from "./whatIdoData";
import Card from "../cards/card";

function WhatIdo() {
  return (
    <section className='section section--alt whatido'>
      <div className='container'>
        <div className="whatido-content">
          <div>
            <span className='eyebrow'>What I do</span>
            <h2 className='section-title'>
              Engineering software that’s built to <span className='accent'>last</span>
            </h2>
          </div>
          <div className='whatido-text'>
            <p>
              I specialize in building scalable, high-performance web applications that solve real-world problems, with a strong focus on backend development using .NET and Node.js. I design and implement robust APIs, efficient server-side architectures, and secure data-driven systems that power modern applications at scale.
            </p>
            <p>
              While my core strength lies in backend engineering, I also bring solid frontend experience, building intuitive and responsive user interfaces with technologies like React. This allows me to deliver end-to-end, production-grade solutions that are reliable, efficient, and user-focused.
            </p>
            <p>
              My goal is to build applications that are not just functional, but engineered for performance, scalability, and long-term maintainability. I don’t just focus on making things work — I focus on making them:
            </p>
          </div>
        </div>

        <div className="whatido-cards">
          {whatIdodata.map((item, i) => (
            <Card key={item.id} index={i + 1} heading={item.title} details={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIdo
