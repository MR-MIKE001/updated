import React from "react";
import "./footer.css";
import wave from "../../img/wave.png";
import { UilFacebook, UilWhatsapp, UilMailbox } from "@iconscout/react-unicons";

function Foot() {
  return (
    <div className='footer'>
      <img src={wave} alt='' style={{ width: "100%", height: "300px" }} />
      <div className='f-content'>
        <a href='mailto:aimrmike3@gmail.com'>ibrahimemicheal@gmail.com</a>
        <div>
          <div className='f-icons'>
            <a href='https://wa.me/+2348109433307'>
              <UilWhatsapp color='white' size='3rem' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=61566887810491'>
              <UilFacebook color='white' size='3rem' />
            </a>
            <a href='mailto:aimrmike3@gmail.com'>
              <UilMailbox color='white' size='3rem' />
            </a>
          </div>

          <a
            className='num'
            href='tel:+2348109433307'
            style={{ marginLeft: "2.5rem" }}>
            +2347086131540
          </a>
        </div>
      </div>
    </div>
  );
}

export default Foot;
