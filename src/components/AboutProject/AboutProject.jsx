import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import "./AboutProject.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

function AboutProject() {
  const [aboutProject, setAboutProject] = useState([]);
  const { lang } = useContext(Context);
  console.log(aboutProject);
  const projectId = window.localStorage.getItem('aboutId')
  useEffect(() => {
    fetch(`http://localhost:8080/api/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setAboutProject(data))
      .catch((err) => console.error("Error", err));
    // aboutProject
    //   ?.filter((project) => projectId === project.id)
    //   .map((item) => setAboutProject(item));
  }, [projectId]);
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
        {aboutProject.images?.map((img, index) =>
          [1, 2, 3].map((num) => (
            <SwiperSlide key={index} className="swiperslide">
              <img
                key={num}
                src={img[`image${num}`]}
                alt=""
                className="h-10 w-10 rounded-md object-cover ring-1 ring-slate-200"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="projectBody">
        <h1>{aboutProject.client}</h1>
        <p className="type">{aboutProject[`title_${lang}`]}</p>
        {/* <p className="subtitle">{aboutProject[`description_${lang}`]}</p> */}
        {/* <div className="view_live">
          <p>{lang == "en" ? "View live" : "Real holatda ko‘rish"}</p>
          <a href="https://www.youtube.com/watch?v=eV25g4VK_Eg" target="_blank">
            https://www.example.com <i className="bi bi-arrow-right"></i>
          </a>
        </div> */}
        <div className="aboutProject">
          <div className="about">
            <h1>{lang == "en" ? "About the project" : "Loyiha haqida"}</h1>
            <p>{aboutProject[`desc_${lang}`]}</p>
          </div>
          <div className="tech">
            <h1>{lang == "en" ? "Tech stack" : "Texnik to'plam"}</h1>
            <div className="techstack">
              <span>{aboutProject.techStack}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
