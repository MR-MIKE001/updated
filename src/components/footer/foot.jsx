
import "./footer.css";
import wave from "../../img/wave.png";
import { UilFacebook, UilWhatsapp,UilLinkedin } from "@iconscout/react-unicons";

function Foot() {
  return (
    <div className='footer'>
      <img src={wave} alt='' style={{ width: "100%", height: "300px" }} />
      <div className='f-content'>
        <a href='mailto:aimrmike3@gmail.com'>aimrmike3@gmail.com</a>
        <div>
          <div className='f-icons'>
            
            <a href='https://www.facebook.com/profile.php?id=61566887810491' target="blank">
              <UilFacebook color='#2f2f2f' size='3rem' />
            </a>
            <a href='https://wa.me/+2348109433307' target="blank">
              <UilWhatsapp color='#2f2f2f' size='3rem' />
            </a>
            <a href='https://www.linkedin.com/in/micheal-ibrahim-57539937a' target="blank">
              <UilLinkedin color='#2f2f2f' size='3rem' />
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
