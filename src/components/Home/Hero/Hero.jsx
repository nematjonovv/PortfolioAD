import { Link } from "react-router-dom";
import "./Hero.scss";
import { useTranslation } from "react-i18next";

function Hero() {

  const [t, i18n] = useTranslation("global")
  
  return (
    <div className="hero">
      <div className="hero-text">
        <span className="role">{t("home.hero.role")}</span>
        <h1 className="hero-title">{t("home.hero.greeting")}<p>Akbarov Davron</p></h1>
        <p className="hero-desc">
        {t("home.hero.desc")}
        </p>
        <div className="hero-btn-group">
            <Link to={"/portfolio"}>Projects</Link>
            <a href='https://t.me/Portfolioyim_AD' target="_blank">Telegram</a>
        </div>
      </div>

      <div className="bg-yellow">
      </div>
    </div>
  );
}

export default Hero;
