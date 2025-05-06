const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <header className="aboutus-header">
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
