import { Link } from "react-router-dom";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import logo from "../../../public/images/mainLogo.png"
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { FiMenu, FiX } from "react-icons/fi";
function Header() {
  
  const [t, i18n] = useTranslation("global");
  const {setLang} = useContext(Context)
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <img className="mainLogo" src={logo} alt="Logo" />
        </Link>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        
        <ul className={`navigation ${menuOpen ? "open" : ""}`}>
          <select className="changeLang" onChange={(e) => handleChangeLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
          </select>
          <li className="navigation-item">
            <Link to="/" onClick={() => setMenuOpen(false)}>{t("home.navbar.home")}</Link>
          </li>
          <li className="navigation-item">
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>{t("home.navbar.portfolio")}</Link>
          </li>
          <li className="navigation-item">
            <Link to="/about" onClick={() => setMenuOpen(false)}>{t("home.navbar.about")}</Link>
          </li>
          <li className="navigation-item">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>{t("home.navbar.contact")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
