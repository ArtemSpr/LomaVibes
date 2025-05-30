import { Link } from "react-router-dom";
import "../styles/burger-menu.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import LogIn from "./LogIn/LogIn";
import "../i18n.js";

// import Animatelogo from "../public/217490777.png";
import ListIcon from "../../public/list-icon.svg";
import JobIcon from "../../public/job-icon.svg";
import SettingsIcon from "../../public/settings-icon.svg";
import CalendarIcon from "../../public/calendar-icon.svg";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const { t, i18n } = useTranslation();

  const lngs = {
    fi: { nativeName: "Fi/" },
    en: { nativeName: "Eng" },
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/places")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the notes!", error);
      });
  }, []);

  return (
    <div className="main">
      {/* <div className="animateContainer">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 1 }}
            className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg text-xl"
          >
            <span className="animateItem">
              {" "}
              <img className="animateLogo" src={Animatelogo}></img>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div> */}
      <div className="header">
        <div id="menuToggle">
          <input type="checkbox" id="menuCheckbox" />
          <label htmlFor="menuCheckbox" id="burgerIcon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </label>

          <ul id="menu">
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
        <span className="logo header-text">
          <Link to="/">LomaVibes</Link>
        </span>
        <span className="header-text">
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
      <div className="body">
        <ul className="event-list">
          {notes.map((notes) => (
            <li className="body-item">
              <div className="event-title">{notes.name}</div>
              <div className="event-content">{notes.description}</div>
              <div className="event-adres">{notes.adress}</div>
            </li>
          ))}
        </ul>
      </div>
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

export default Home;
