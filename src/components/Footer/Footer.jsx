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
            <a href="#" className="social-link" aria-label="Instagram">
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
            <a href="#" className="social-link" aria-label="Telegram">
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
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
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
