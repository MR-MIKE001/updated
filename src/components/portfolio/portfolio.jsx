
import "./portfolio.css";
import sidebar from "../../img/sidebar.png";

import hoc from "../../img/hoc.png";
import music from "../../img/musicapp.png";
import chat from '../../img/chatlogo.PNG'
import airbnb from "../../img/airbnb.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function Portfolio() {


  
  const image = [
    {name :chat,url:"https://chatapp-54bu.onrender.com/"},
    {name:airbnb,url:'https://airbnb-clone-fzfi.onrender.com'},
    {name:sidebar,
   url:""}, {name:music,
   url:""}, {name:hoc,
   url:""}];
  return (
    <div className='portfolio'>
      <div className='mike'>recent projects</div>
      <div className='mike2'>portfolio</div>
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
