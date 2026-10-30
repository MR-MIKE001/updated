import offerData from "./offerDate";
import Pricing from "./pricing/Pricing";
import GetInTouch from "../getInTouch/GetInTouch";
import "./Offer.css"

function Offer() {
  return (
    <section className="section offer">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title offer__title">Here are some of our <span className="accent">packages</span></h2>
          <p className="section-lead">Transparent starting prices. Every project is scoped to your goals before work begins.</p>
        </div>
        <Pricing services={offerData} />
        <GetInTouch />
      </div>
    </section>
  );
}

export default Offer;
