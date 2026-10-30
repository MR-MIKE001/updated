import "./portfolio.css";
import hoc from "../../img/ahis_logo.webp";
import agentity from "../../img/agentitypage.webp";
import chat from '../../img/chatlogo.webp'
import airbnb from "../../img/aii.webp";
import nike from '../../img/Nikebg.webp'
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  { title: "Real-time Chat App", image: chat, url: "https://chatapp-54bu.onrender.com/", tags: ["Socket.IO", "Node.js", "React"], description: "A real-time chat application built with Socket.IO, allowing users to create and join chat rooms for seamless communication." },
  { title: "Airbnb Clone", image: airbnb, url: "https://airbnb-clone-fzfi.onrender.com", tags: ["React", "Node.js", "Auth"], description: "An Airbnb clone built with React and Node.js, featuring user authentication, property listings, and booking functionality for a seamless vacation rental experience." },
  { title: "Nike Store Clone", image: nike, url: "https://nike-mr-mike-2i2j.onrender.com/", tags: ["React", "Node.js", "E-commerce"], description: "A Nike clone built with React and Node.js, featuring user authentication, product listings, and shopping functionality for a seamless e-commerce experience." },
  { title: "Agentity", image: agentity, url: "https://agentity-frontend-dev.onrender.com/", tags: ["React", "Node.js", "Auth"], description: "An Agentity project built with React and Node.js, featuring user authentication, property listings, and booking functionality for a seamless experience." },
  { title: "Africa International Housing Show", image: hoc, url: "", tags: ["React", "Node.js"], description: "A HOC project built with React and Node.js, featuring user authentication, property listings, and booking functionality for a seamless experience." },
];

function Portfolio() {
  return (
    <section className='section section--alt portfolio' id='portfolio'>
      <div className='container'>
        <div className='section-head section-head--center'>
          <span className='eyebrow'>Recent projects</span>
          <h2 className='section-title'>Portfolio</h2>
          <p className='section-lead'>A selection of products I’ve designed, built and shipped.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1.08}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {projects.map((project) => {
            const Wrapper = project.url ? "a" : "div";
            const linkProps = project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <SwiperSlide key={project.title}>
                <Wrapper className='project' {...linkProps}>
                  <div className='project-media'>
                    <img className='icon' src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className='project-body'>
                    <h3>
                      {project.title}
                      {project.url && <UilExternalLinkAlt size="16" />}
                    </h3>
                    <p>{project.description}</p>
                    <ul className='project-tags'>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                </Wrapper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
