import "./Testimonials.scss";
import client1 from "../../../../public/images/testimonials/Image.png";
import client2 from "../../../../public/images/testimonials/Image (1).png";
import client3 from "../../../../public/images/testimonials/Image.png";
import { useTranslation } from "react-i18next";
function Testimonials() {
  const [t] = useTranslation("global");
  const testimonialImg = [client1, client2, client3];
  return (
    <div className="clients_say">
      <h1 className="components-title">{t("home.clientsOpinion.title")}</h1>
      <div className="clients_wrapper">
        {t("home.clientsOpinion.testimonials", { returnObjects: true }).map(
          (testimonial, index) => (
            <div className="clients_cart" key={index}>
              <img src={testimonialImg[index]} alt="" />
              <h1>{testimonial.clientName}</h1>
              <p>"{testimonial.clientSay}"</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Testimonials;
