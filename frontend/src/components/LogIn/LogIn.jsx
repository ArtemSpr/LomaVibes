import { useRef, useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";

import "./LogIn.css";
import PersonIcon from "/Users/s2401573/Documents/Project/LomaVibes/frontend/public/person-icon.svg";

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { t, i18n } = useTranslation();

  const [isLogin, setIsLogin] = useState(false);

  const lngs = {
    fi: { nativeName: "Fi/" },
    en: { nativeName: "Eng" },
  };

  const getLogin = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    axios
      .post(
        "http://localhost:5266/api/auth/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("response: " + response);
        console.log(response.status);
        username = "";
        password = "";
        if (response.status === 200) {
          setIsLogin(true);
          console.log("Login successful");
          Swal.fire({
            title: "Success!",
            text: "Login successful !",
            icon: "success",
            confirmButtonText: "Ок",
            customClass: {
              title: "swal-title",
              text: "swal-text",
              popup: "swal-popup",
              confirmButton: "swal-button",
              htmlContainer: "swal-text",
            },
          });
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.error("There was an error posting user!", error);
        console.log("Login failed");
        setIsLogin(false);
        Swal.fire({
          title: "Error!",
          text: "You entered something wrong :(",
          icon: "error",
          confirmButtonText: "Ок",
          customClass: {
            title: "swal-title",
            text: "swal-text",
            popup: "swal-popup",
            confirmButton: "swal-button",
            htmlContainer: "swal-text",
          },
        });
      });
  };

  const getRegister = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    axios
      .post(
        "http://localhost:5266/api/auth/register",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("response: " + response);
        console.log(response.status);
        username = "";
        password = "";
        if (response.status === 200) {
          setIsLogin(true);
          console.log("Register successful");
          Swal.fire({
            title: "Success!",
            text: "Register successful !",
            icon: "success",
            confirmButtonText: "Ок",
            customClass: {
              title: "swal-title",
              text: "swal-text",
              popup: "swal-popup",
              confirmButton: "swal-button",
              htmlContainer: "swal-text",
            },
          });
        } else {
          console.log("Register failed");
        }
      })
      .catch((error) => {
        console.error("There was an error posting user!", error);
        console.log("Register failed");
        setIsLogin(false);
        Swal.fire({
          title: "Error!",
          text: "You entered something wrong :(",
          icon: "error",
          confirmButtonText: "Ок",
          customClass: {
            title: "swal-title",
            text: "swal-text",
            popup: "swal-popup",
            confirmButton: "swal-button",
            htmlContainer: "swal-text",
          },
        });
      });
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
            id="username"
          />
          <input
            type="password"
            placeholder={t("password")}
            className="dropdown-input"
            id="password"
          />
          <button className="dropdown-button" onClick={() => getLogin()}>
            {t("login")}
          </button>
          <button className="dropdown-button" onClick={() => getRegister()}>
            {t("register")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
