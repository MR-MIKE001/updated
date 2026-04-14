import offerData from "./offerDate";
import Pricing from "./pricing/Pricing";
import GetInTouch from "../getInTouch/GetInTouch";
import "./Offer.css"
function Offer() {
  return (
    <div
    className="offer"
    >
      <h2 className="offer__title" >
        Here are some of our packages
      </h2>

      {/* {offerData.map((offer, index) => (
        <div
          key={index}
          style={{
            background: darkMode ? "#3f3f3f" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
            margin: "20px 0",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Pricing se
          rvices={offer.services} />
        </div>
      ))} */}
      <Pricing services={offerData} />
      <GetInTouch/>
    </div>
  );
}

export default Offer;