import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animateContainer">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 1 }}
            className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg text-xl"
          >
            <span className="animateItem"> Я зникну за 2 секунди ✨</span>
          </motion.div>
        )}
      </AnimatePresence>
      sd
    </div>
  );
}
