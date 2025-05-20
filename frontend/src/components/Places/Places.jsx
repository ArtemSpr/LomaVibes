import "./Places.css";

import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";

import ListIcon from "../../../public/list-icon.svg";
import JobIcon from "../../../public/job-icon.svg";
import SettingsIcon from "../../../public/settings-icon.svg";
import CalendarIcon from "../../../public/calendar-icon.svg";

import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const Places = () => {
  const [showAll, setShowAll] = useState(false);

  const { t, i18n } = useTranslation();

  const lngs = {
    fi: { nativeName: "Fi/" },
    en: { nativeName: "Eng" },
  };

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5266/api/places")
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the notes!", error);
      });
  }, []);

  return (
    <div className="places-container">
      <div className="places-header">
        <div id="places-menuToggle">
          <input type="checkbox" id="places-menuCheckbox" />
          <label htmlFor="places-menuCheckbox" id="places-burgerIcon">
            <div className="places-bar"></div>
            <div className="places-bar"></div>
            <div className="places-bar"></div>
          </label>
          <ul id="places-menu">
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
            <li className="places-active-link">
              <Trans
                i18nKey="places"
                components={{ 5: <Link to="/places">Places</Link> }}
              />
            </li>
          </ul>
        </div>
        <span className="places-logo places-header-text">
          <Link to="/">LomaVibes</Link>
        </span>
        <span className="places-header-text">
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

      <header className="places-bigTitle">
        <h1 className="places-title">{t("placesTitle")}</h1>
        <p className="places-subtitle">{t("placesMean")}</p>
      </header>
      <ul className="event-list">
        {notes.map((notes) => (
          <li className="body-item">
            <div className="event-title">{notes.name}</div>
            <div className="event-content">{notes.description}</div>
            <div className="event-adres">{notes.adress}</div>
            <button className="event-btn" onClick={() => setShowAll(!showAll)}>
              {" "}
              {t("showMore")}
            </button>
          </li>
        ))}
      </ul>
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

export default Places;
