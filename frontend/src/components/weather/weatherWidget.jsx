import "./weather.css";
import React, { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";

import "../../i18n.js";

const API_KEY = "5fcf12dc7ab9215a2f9a553a494db439";

const cities = [
  { name: "Helsinki", id: 658225, emoji: "🏙️" },
  { name: "Espoo", id: 660013, emoji: "🌲" },
  { name: "Turku", id: 634963, emoji: "🏰" },
];

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  const { t, i18n } = useTranslation();

  const lngs = {
    fi: { nativeName: "Fi/" },
    en: { nativeName: "Eng" },
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const promises = cities.map((city) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=${API_KEY}`
          ).then((res) => res.json())
        );

        const results = await Promise.all(promises);

        const data = {};
        results.forEach((weather, idx) => {
          data[cities[idx].name] = weather;
        });

        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading weather data... ⏳</p>;

  return (
    <div>
      <div className="weather-wrapper">
        {cities.map((city) => {
          const weather = weatherData[city.name];
          if (!weather)
            return <p key={city.name}>No data for {city.name} ❌</p>;

          return (
            <div key={city.name} className="city-weather-block">
              <h3>
                {city.emoji} {city.name}
              </h3>
              <p>
                🌡️ {t("temperature")}: {weather.main.temp} °C
                <br />
                🌤️ {t("description")}: {weather.weather[0].description}
                <br />
                💧 {t("humidity")}: {weather.main.humidity} %
                <br />
                💨 {t("wind")} Speed: {weather.wind.speed} m/s
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherWidget;
