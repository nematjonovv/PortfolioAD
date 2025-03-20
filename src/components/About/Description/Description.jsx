import { useTranslation } from "react-i18next";
import "./Description.scss";

function Description() {
  const [t] = useTranslation("global");
  return (
    <div className="description">
      <h1>{t("about.description.title")}</h1>
      <p>{t("about.description.desc")}</p>
    </div>
  );
}

export default Description;
