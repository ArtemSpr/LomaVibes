import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home";

import Places from "./components/Places/Places";
import Settings from "./components/Settings/Settings";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
