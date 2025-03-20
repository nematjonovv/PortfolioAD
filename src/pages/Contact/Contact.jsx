import { useTranslation } from "react-i18next";
import "./Contact.scss";
import FormContact from "../../components/FormContact/FormContact";
import Details from "../../components/Details/Details";

function Contact() {
  const [t] = useTranslation("global");

  return (
    <div className="contact container">
      <div className="contact_heading">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </div>
      <div className="contact_body">
        <Details />
        <FormContact />
      </div>
    </div>
  );
}

export default Contact;
