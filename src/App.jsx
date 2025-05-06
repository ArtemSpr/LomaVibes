import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Animatelogo from "../public/217490777.png";
import Menu from "../public/menu.svg";
import ListIcon from "../public/list-icon.svg";
import JobIcon from "../public/job-icon.svg";
import SettingsIcon from "../public/settings-icon.svg";
import CalendarIcon from "../public/calendar-icon.svg";

const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main">
      <div className="animateContainer">
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
      </div>
      <div className="header">
        <div id="menuToggle">
          <input type="checkbox" id="menuCheckbox" />
          <label for="menuCheckbox" id="burgerIcon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </label>

          <ul id="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <a href="#">Summer Job</a>
            </li>
            <li>
              <a href="#">Places</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li className="aboutUs">
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <span className="logo header-text">LomaVibes</span>
        <span className="header-text">Fi/En</span>
      </div>
      <div className="body">
        <span className="body-item">
          <div className="event-title"> Event name</div>
          <div className="event-content">Event information</div>
          <div className="event-adres">Event adres or google map link</div>
        </span>
        <span className="body-item">
          <div className="event-title"> Event name</div>
          <div className="event-content">Event information</div>
          <div className="event-adres">Event adres or google map link</div>
        </span>
        <span className="body-item">
          <div className="event-title"> Event name</div>
          <div className="event-content">Event information</div>
          <div className="event-adres">Event adres or google map link</div>
        </span>
        <span className="body-item">
          <div className="event-title"> Event name</div>
          <div className="event-content">Event information</div>
          <div className="event-adres">Event adres or google map link</div>
        </span>
      </div>
      <div className="nav-bar">
        <div className="nav-bar-container">
          <span className="nav-bar-item">
            <a src="/pages/SummerJob.jsx">
              <img src={JobIcon}></img>
            </a>
          </span>
          <span className="nav-bar-item">
            <a src="#">
              <img src={CalendarIcon}></img>
            </a>
          </span>
          <span className="nav-bar-item">
            <a src="#">
              <img src={ListIcon}></img>
            </a>
          </span>
          <span className="nav-bar-item">
            <a src="#">
              <img src={SettingsIcon}></img>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
