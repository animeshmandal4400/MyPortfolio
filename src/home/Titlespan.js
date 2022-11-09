import { motion } from "framer-motion";
const TitleSpan = ({ children }) => {
  return <motion.span whileHover={{ scale: 1.5 }}>{children}</motion.span>;
};

export default TitleSpan;
