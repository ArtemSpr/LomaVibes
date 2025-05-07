import "./Settings.css";
import { Link } from "react-router-dom";

const SettingsPage = () => {
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
            <li className="settings-active-link">
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
        </div>
        <span className="settings-logo settings-header-text">LomaVibes</span>
        <span className="settings-header-text">Fi/En</span>
      </div>

      <div className="settings-title">
        <h1>Page settings</h1>
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <h2>Main settings</h2>
        </div>

        <div className="settings-section">
          <h2>Some settings</h2>
        </div>

        <div className="settings-section">
          <h2>Some another settings</h2>
        </div>
      </div>

      <div className="settings-footer">
        <button className="save-button">Save changes</button>
      </div>
    </div>
  );
};

export default SettingsPage;
