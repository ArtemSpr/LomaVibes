import { useRef, useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

import "./LogIn.css";
import PersonIcon from "/Users/s2401573/Documents/Project/LomaVibes/public/person-icon.svg";

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { t, i18n } = useTranslation();

  const lngs = {
    fi: { nativeName: "Fi/" },
    en: { nativeName: "Eng" },
  };

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
            placeholder={t("username")}
            className="dropdown-input"
          />
          <input
            type="password"
            placeholder={t("password")}
            className="dropdown-input"
          />
          <button className="dropdown-button">{t("login")}</button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
