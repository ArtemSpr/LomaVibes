import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Calendar from "./components/Calendar/Calendar";
import SummerJob from "./components/SummerJob/SummerJob";
import Places from "./components/Places/Places";
import Settings from "./components/Settings/Settings";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVisible(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/summerjob" element={<SummerJob />} />
        <Route path="/places" element={<Places />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
