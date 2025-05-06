import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import SummerJob from "./pages/SummerJob";
import Places from "./pages/Places";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";

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
