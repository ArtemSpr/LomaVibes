import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

// import Animatelogo from "../public/217490777.png";
import ListIcon from "../../public/list-icon.svg";
import JobIcon from "../../public/job-icon.svg";
import SettingsIcon from "../../public/settings-icon.svg";
import CalendarIcon from "../../public/calendar-icon.svg";
import PersonIcon from "../../public/person-icon.svg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <label for="menuCheckbox" id="burgerIcon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </label>

          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/summerjob">Summer Job</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li className="aboutUs">
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
        </div>
        <span className="logo header-text">LomaVibes</span>
        <span className="header-text">
          <div className="dropdown-container" ref={dropdownRef}>
            <img
              src={PersonIcon}
              height={40}
              alt="Settings Icon"
              className="dropdown-icon"
              onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
              <div className="dropdown-popup">
                <input
                  type="text"
                  placeholder="Username"
                  className="dropdown-input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="dropdown-input"
                />
                <button className="dropdown-button">Log in</button>
              </div>
            )}
          </div>
          Fi/En
        </span>
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

export default Home;
