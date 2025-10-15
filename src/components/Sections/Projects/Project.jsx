import React from "react";
import { StyledProjects } from "./StyledProjects";
import WorkCard from "./WorkCard";
import Data from "./WorksData";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = React.forwardRef((props, ref) => {
  return (
    <StyledProjects ref={ref}>
      <div className="ProjectsContainer">
        <div className="TopFolder">
          <div className="FolderPath">
            <h1>Projects</h1>
            <span>/Portfolio/Projects</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="183.5px"
            height="108.5px"
            className="SvgTopFolder"
          >
            <path
              className="Path"
              fillRule="evenodd"
              stroke="rgba(89, 89, 144, 0.5)"
              strokeWidth="1px"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="rgba(89, 89, 144, 0.1)"
              d="M1.500,105.500 C1.500,105.500 1.500,29.741 1.500,7.543 C1.500,3.732 2.500,2.500 2.500,2.500 C2.500,2.500 3.591,1.500 7.449,1.500 C53.588,1.500 124.500,1.500 124.500,1.500 L181.500,106.500 "
            />
          </svg>
        </div>

        <div className="FeauturedWoksList">
          <WorkCard
            text="Loan Prediction Repayment"
            Cover="3"
            techs={["React js", "Python", "TailwindCSS", "Firebase"]}
            Repo="https://github.com/kannishhh/loan-predictor-app"
          />
          <WorkCard
            text="Netflix-GPT"
            techs={["React js", "TailwindCSS", "Firebase", "Redux"]}
            Repo="https://github.com/kannishhh/Neflix-GPT"
            Cover="4"
          />
          <WorkCard
            text="My Food App"
            techs={["React js", "JavaScript"]}
            Repo="https://github.com/kannishhh/my-food-app"
            Cover="7"
          />
        </div>

        <div className="AllWorksSlide">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className={"SwiperContainer"}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={4000}
            allowTouchMove={false}
            simulateTouch={false}
            navigation={true}
          >
            {Data.map((Item, index) => (
              <SwiperSlide className="SwiperEl" key={index}>
                <div
                  className="Element"
                  style={{
                    backgroundImage: `url(./Photos/Portfolio/Preview/${Item.prev})`,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </StyledProjects>
  );
});

export default Projects;
