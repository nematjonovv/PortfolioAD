import { Link } from "react-router-dom";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import logo from "../../../public/images/mainLogo.png"
function Header() {
  
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to={"/"}>
          <img
            className="mainLogo"
            src={logo}
            alt=""
          />
        </Link>

        <ul className="navigation">
          <select className="changeLang" onChange={(e)=> handleChangeLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
          </select>
          <li className="navigation-item">
            <Link to={"/"}>{t("home.navbar.home")}</Link>
          </li>
          <li className="navigation-item">
            <Link to={"/portfolio"}>{t("home.navbar.portfolio")}</Link>
          </li>
          <li className="navigation-item">
            <Link to={"/about"}>{t("home.navbar.about")}</Link>
          </li>
          <li className="navigation-item">
            <Link to={"/contact"}>{t("home.navbar.contact")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
