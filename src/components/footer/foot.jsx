
import "./footer.css";
import wave from "../../img/wave.png";
import { UilFacebook, UilWhatsapp, UilTwitter } from "@iconscout/react-unicons";

function Foot() {

  return (
    <div className='footer'>
      <img src={wave} alt='wave' className="footImg" />
      <div className='f-content'>
        <a href='mailto:aimrmike5@gmail.com'>aimrmike5@gmail.com</a>
        <div>
          <div className='f-icons'>
            
            <a href='https://web.facebook.com/profile.php?id=100085523963850' target="blank">
              <UilFacebook color='#2f2f2f' size='3rem' />
            </a>
            <a href='https://wa.me/+2348109433307' target="blank">
              <UilWhatsapp color='#2f2f2f' size='3rem' />
            </a>
            <a href='https://x.com/mrmikeadavize' target="blank">
              <UilTwitter color='#2f2f2f' size='3rem' />
            </a>
          
          </div>

          <a
            className='num'
            href='tel:+2348109433307'
            style={{ marginLeft: "2.5rem" }}>
            +2348109433307
          </a>
        </div>
      </div>
    </div>
  );
}

export default Foot;
