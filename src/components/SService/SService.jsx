import Card from "../cards/card"
import "./SService.css"
import serviceData from "./servicesData"

function SService() {
  return (
    <section className="section section--alt service">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Services</span>
          <h2 className="section-title">How I can <span className="accent">help</span></h2>
          <p className="section-lead">Some of the services I offer include:</p>
        </div>
        <div className="service-cards">
          {serviceData.map((service, i) => (
            <Card key={service.id} index={i + 1} heading={service.heading} details={service.deatals} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SService
