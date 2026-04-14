
import "./portfolio.css";
import hoc from "../../img/ahis_logo.png";
import agentity from "../../img/agentitypage.png";
import chat from '../../img/chatlogo.PNG'
import airbnb from "../../img/aii.png";
import nike from '../../img/Nikebg.PNG'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { themeContext } from "../../contest";
import { useContext } from "react";


function Portfolio() {
const darkMode = useContext(themeContext).state.darkMode;

  
  const image = [
    {name :chat,url:"https://chatapp-54bu.onrender.com/",description:"A real-time chat application built with Socket.IO, allowing users to create and join chat rooms for seamless communication."},
    {name:airbnb,url:'https://airbnb-clone-fzfi.onrender.com',description:"An Airbnb clone built with React and Node.js, featuring user authentication, property listings, and booking functionality for a seamless vacation rental experience."},
    {name:nike,
   url:"https://nike-mr-mike-2i2j.onrender.com/",description:"A Nike clone built with React and Node.js, featuring user authentication, product listings, and shopping functionality for a seamless e-commerce experience."}, {name:agentity,
   url:"https://agentity-frontend-dev.onrender.com/",description:"An Agentity project built with React and Node.js, featuring user authentication, property listings, and booking functionality for a seamless experience."}, {name:hoc,
   url:"",description:"A HOC project built with React and Node.js, featuring user authentication, property listings, and booking functionality for a seamless experience."}];
  return (
    <div className='portfolio'>
      <div className='mike' style={{ color: darkMode ? "white" : "" }}>PORTFOLIO</div>
      <div className='mike2'>RECENT PROJECTS</div>
      <div>
      
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={6}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
          >
            {image.map((img) => {
              return (
                <SwiperSlide>
                <a href={img.url} target="blank">
                  <img
                    className='icon'
                    key={img}
                    src={img.name}
                    alt={img.description}
                   
                  /></a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        
      </div>
    </div>
  );
}

export default Portfolio;
