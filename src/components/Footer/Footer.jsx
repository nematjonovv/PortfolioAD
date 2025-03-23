import { Link } from "react-router-dom";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import mainLogo from '../../../public/images/mainLogo.png'
export default function Footer() {
  const currentYear = new Date().getFullYear();
    const [t] = useTranslation("global")
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <img src={mainLogo} alt="" />
              </div>
            </div>
            <p className="brand-tagline">{t("footer.subtitle")}</p>
          </div>
              
          <nav className="footer-nav">
            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link">
                  {t("home.navbar.home")}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="nav-link">
                {t("home.navbar.portfolio")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                {t("home.navbar.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                {t("home.navbar.contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="social-links">
            <a href="https://www.instagram.com/davronakbarov_" target="_blank" className="social-link" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://t.me/Portfolioyim_AD" target="_blank" className="social-link" aria-label="Telegram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.25 6.54c.185.415.594.695 1.056.695a1.125 1.125 0 0 0 1.066-.798L13.5 12.5l6.21 3.105c.394.197.84.198 1.235.002a1.125 1.125 0 0 0 .572-.686l2.4-9.6a2.25 2.25 0 0 0-2.719-2.888z"></path>
              </svg>
            </a>
            <a href="https://www.pinterest.com/akbarovdavron0604/" target="_blank" className="social-link" aria-label="Pinterest">
            <i class="bi bi-pinterest"></i>
            </a>
            <a href="https://www.behance.net/davronbekakbarov" target="_blank" className="social-link" aria-label="Behance">
            <i class="bi bi-behance"></i>
            </a>
            
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} {t("footer.copyright")}</p>
        </div>
      </div>

      <div className="glow-effect glow-1"></div>
      <div className="glow-effect glow-2"></div>
    </footer>
  );
}
