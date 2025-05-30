import "./AboutUs.css";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";

import ListIcon from "../../../public/list-icon.svg";
import JobIcon from "../../../public/job-icon.svg";
import SettingsIcon from "../../../public/settings-icon.svg";
import CalendarIcon from "../../../public/calendar-icon.svg";

import { useTranslation, Trans } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const lngs = {
    fi: { nativeName: "Fi/" },
    en: { nativeName: "Eng" },
  };
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <div id="aboutus-menuToggle">
          <input type="checkbox" id="aboutus-menuCheckbox" />
          <label htmlFor="aboutus-menuCheckbox" id="aboutus-burgerIcon">
            <div className="aboutus-bar"></div>
            <div className="aboutus-bar"></div>
            <div className="aboutus-bar"></div>
          </label>
          <ul id="aboutus-menu">
            <li>
              <Trans
                i18nKey="home"
                components={{
                  6: <Link to="/">Home</Link>,
                }}
              />
            </li>
            <li>
              <Trans
                i18nKey="calendar"
                components={{ 1: <Link to="/calendar">Calendar</Link> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="summerjob"
                components={{ 2: <Link to="/summerjob">Summer Job</Link> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="places"
                components={{ 3: <Link to="/places">Places</Link> }}
              />
            </li>
            <li>
              <Trans
                i18nKey="settings"
                components={{ 4: <Link to="/settings">Settings</Link> }}
              />
            </li>
            <li className="aboutus-active-link">
              <Trans
                i18nKey="aboutus"
                components={{ 5: <Link to="/aboutus">About Us</Link> }}
              />
            </li>
          </ul>
        </div>
        <span className="aboutus-logo aboutus-header-text">
          <Link to="/">LomaVibes</Link>
        </span>
        <span className="aboutus-header-text">
          <LogIn />
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              className="languageBtn"
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </span>
      </div>

      <header className="aboutus-bigTitle">
        <h1 className="aboutus-title">{t("AboutUsTitle")}</h1>
        <p className="aboutus-subtitle">{t("AboutUsSubTitle")}</p>
      </header>
      <section className="aboutus-content">
        <div className="aboutus-content-text">
          <Trans
            i18nKey="aboutFirstIndent"
            components={{ p: <p />, span: <span className="highlight" /> }}
          />

          <Trans i18nKey="aboutSecondIndent" />
          <Trans
            i18nKey="aboutThirdIndent"
            components={{ span: <span className="highlight"></span> }}
          />

          <footer className="aboutus-footer">© 2025 Loma Vibes Finland</footer>
        </div>
      </section>
      <div className="nav-bar">
        <div className="nav-bar-container">
          <span className="nav-bar-item">
            <Link to="/summerjob">
              <img src={JobIcon}></img>
            </Link>
          </span>
          <span className="nav-bar-item">
            <Link to="/calendar">
              <img src={CalendarIcon}></img>
            </Link>
          </span>
          <span className="nav-bar-item">
            <Link to="/places">
              <img src={ListIcon}></img>
            </Link>
          </span>
          <span className="nav-bar-item">
            <Link to="/settings">
              <img src={SettingsIcon}></img>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
