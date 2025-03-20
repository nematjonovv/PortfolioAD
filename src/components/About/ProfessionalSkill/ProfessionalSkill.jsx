import { useTranslation } from "react-i18next";
import "./ProfessionalSkill.scss";

function ProfessionalSkill() {
  const [t] = useTranslation("global");
  return (
    <div className="experience">
      <h1 className="experience-heading">
        {t("about.professionalSkill.title")}
      </h1>

      <ul className="experience-list">
        {t("about.professionalSkill.experinece", { returnObjects: true }).map(
          (exp, index) => (
            <li className="experience-item">
              <div className="bullet-point"></div>
              <div className="experience-content">
                <h3 className="job-title">{exp.where}</h3>
                <p className="job-period">{exp.from} - {exp.to}</p>
              </div>
            </li>
          )
        )}
        <div className="line"></div>
      </ul>
    </div>
  );
}

export default ProfessionalSkill;
