import "./TopProjects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import eco1 from "../../../../public/images/ecosun/eco.png"
import eco2 from "../../../../public/images/ecosun/eco1.png"
import eco3 from "../../../../public/images/ecosun/eco3.png"
function TopProjects() {
  const [t] = useTranslation("global");

  const topProjectsData = [
    {
      id: 1,
      title: "ECO SUN SERVICE",
      img: [eco1,eco2,eco3],
    },
    {
      id: 2,
      title: "ECO SUN SERVICE",
      img: [eco1,eco2,eco3],
    },
    {
      id: 3,
      title: "ECO SUN SERVICE",
      img: [eco1,eco2,eco3],
    },
  ];

  return (
    <section className="topProjects">
      <h1 className="components-title">{t("home.topProjects.title")}</h1>
      <ul className="topProjects-menu">
        {topProjectsData.map((item, index) => (
          <div className="topProjects-item">
            <div className="item-carousel">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {item.img.map((img) => (
                  <SwiperSlide>
                    <img src={img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="item-text">
              <h1>ECO SUN SERVICE</h1>
              <p>{t("home.topProjects.desc")}</p>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default TopProjects;
