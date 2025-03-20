import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../Context/Context";
import "./AboutProject.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

function AboutProject() {
  const { projectId } = useContext(Context);
  const [aboutProject, setAboutProject] = useState("");
  const { lang } = useContext(Context);

  useEffect(() => {
    fetch(
      `http://localhost:5000/portfolio/${projectId ? projectId : projectId}`
    )
      .then((response) => response.json())
      .then((data) => setAboutProject(data))
      .catch((err) => console.error("Error", err));
  }, []);
  return (
    <div className="container aboutProject-wrapper">
      <Swiper
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {aboutProject.img?.map((img, index) => (
          <SwiperSlide className="swiperslide">
            <img key={index} className="slide-img" src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="projectBody">
        <h1>{aboutProject.client}</h1>
        <p className="type">{aboutProject[`title_${lang}`]}</p>
        <p className="subtitle">{aboutProject[`description_${lang}`]}</p>
        <div className="view_live">
          <p>{lang == "en" ? "View live" : "Real holatda ko‘rish"}</p>
          <a href="https://www.youtube.com/watch?v=eV25g4VK_Eg" target="_blank">
            {" "}
            https://www.example.com <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="aboutProject">
          <div className="about">
            <h1>{lang == "en" ? "About the project" : "Loyiha haqida"}</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              id atque inventore ullam nostrum. Quos molestias asperiores nihil
              non provident quis sunt ut explicabo numquam deleniti! Impedit
              repellendus architecto quaerat.
            </p>
          </div>
          <div className="tech">
            <h1>{lang == "en" ? "Tech stack" : "Texnik to'plam"}</h1>
            <div className="techstack">
              {aboutProject.tech?.map((tech1) => (
                <span>{tech1}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
