import React from "react";
import "./portfolio.css";
import sidebar from "../../img/sidebar.png";
import ecom from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import music from "../../img/musicapp.png";
import airbnb from "../../img/airbnb.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Portfolio() {
  const image = [airbnb, ecom, sidebar, music, hoc];
  return (
    <div className='portfolio'>
      <div className='mike'>recent projects</div>
      <div className='mike2'>portfolio</div>
      <div>
        <a href='https://airbnb-clone-fzfi.onrender.com'>
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
                  <img
                    className='icon'
                    key={img}
                    src={img}
                    alt='work done'
                    width={400}
                    height={200}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
