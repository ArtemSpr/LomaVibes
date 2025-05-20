import "./Settings.css";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import { useTranslation, Trans } from "react-i18next";
import "../../i18n.js";

const SettingsPage = () => {
  const { t, i18n } = useTranslation();

  const lngs = {
    fi: { nativeName: "Fi/" },
    en: { nativeName: "Eng" },
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div id="settings-menuToggle">
          <input type="checkbox" id="settings-menuCheckbox" />
          <label htmlFor="settings-menuCheckbox" id="settings-burgerIcon">
            <div className="settings-bar"></div>
            <div className="settings-bar"></div>
            <div className="settings-bar"></div>
          </label>

          <ul id="settings-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li className="settings-active-link">
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
        </div>
        <span className="settings-header-text settings-logo">
          <Link to="/">LomaVibes</Link>
        </span>
        <span className="settings-header-text">
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

      <div className="settings-title">
        <h1>{t("settingsTitle")}</h1>
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <h2>{t("settingsSection")}</h2>
        </div>

        <div className="settings-section">
          <h2>{t("settingsSection")}</h2>
        </div>

        <div className="settings-section">
          <h2>{t("settingsSection")}</h2>
        </div>
      </div>

      <div className="settings-footer">
        <button className="save-button">{t("settingsbutton")}</button>
      </div>
    </div>
  );
};

export default SettingsPage;
