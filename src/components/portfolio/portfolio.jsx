
import "./portfolio.css";


import hoc from "../../img/hoc.png";
import music from "../../img/musicapp.png";
import chat from '../../img/chatlogo.PNG'
import airbnb from "../../img/airbnb.png";
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
    {name :chat,url:"https://chatapp-54bu.onrender.com/"},
    {name:airbnb,url:'https://airbnb-clone-fzfi.onrender.com'},
    {name:nike,
   url:"https://nike-mr-mike-2i2j.onrender.com/"}, {name:music,
   url:""}, {name:hoc,
   url:""}];
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
                    alt='work done'
                   
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
