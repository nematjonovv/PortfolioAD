import "./Service.scss";
import { useTranslation } from "react-i18next";
import branding from "../../../../public/images/servicesImg/branding.png";
import social from "../../../../public/images/servicesImg/instagram (1).png";
import uiux from "../../../../public/images/servicesImg/ux.png";
import flyer from "../../../../public/images/servicesImg/flyer.png";
function Service() {
  const [t] = useTranslation("global");
  const serviceIcons = [branding, social, uiux, flyer];
  return (
    <section className="services">
      <h1 className="components-title">{t("home.services.sectionTitle")}</h1>
      <div className="services-menu">
        {t("home.services.servicesChild", { returnObjects: true }).map(
          (service, index) => (
            <div className="services-item" key={index}>
              <img src={serviceIcons[index]} alt="" />
              <h1 className="title">{service.title}</h1>
              <h5 className="subtitle">
                {service.subtitle}
              </h5>
              <p className="desc">
                {service.description}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Service;
