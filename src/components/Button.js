import { motion } from "framer-motion";

const AnimatedButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
