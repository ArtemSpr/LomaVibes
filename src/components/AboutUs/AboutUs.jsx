import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
            <li className="aboutus-active-link">
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
        </div>
        <span className="aboutus-logo aboutus-header-text">LomaVibes</span>
        <span className="aboutus-header-text">Fi/En</span>
      </div>

      <header className="aboutus-bigTitle">
        <h1 className="aboutus-title">About Us</h1>
        <p className="aboutus-subtitle">
          Discover the essence of Finnish summer
        </p>
      </header>
      <section className="aboutus-content">
        <p>
          Welcome to <span className="highlight">Loma Vibes Finland</span>, your
          go-to guide for exploring the best summer events, must-see
          destinations, and exciting places to visit across Finland! Our team is
          passionate about showcasing the beauty and vibrant culture of Finland,
          helping both locals and tourists make the most of their summer
          adventures.
        </p>
        <p>
          From the stunning landscapes of Lapland to the lively festivals in
          Helsinki, we aim to bring you the most up-to-date information on
          everything Finland has to offer. Our app features real-time details on
          summer events, local attractions, and hidden gems, all conveniently
          integrated with Google Maps to help you navigate your way through
          Finland’s most picturesque spots.
        </p>
        <p>
          Whether you're looking for outdoor activities, cultural experiences,
          or a relaxing retreat,{" "}
          <span className="highlight">Loma Vibes Finland</span> ensures you'll
          never miss out on the essence of a Finnish summer.
        </p>
      </section>
      <footer className="aboutus-footer">© 2025 Loma Vibes Finland</footer>
    </div>
  );
};

export default AboutUs;
