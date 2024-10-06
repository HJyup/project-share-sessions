import { motion } from 'framer-motion';

const HoverDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
      {children}
    </motion.div>
  );
};

export default HoverDiv;
