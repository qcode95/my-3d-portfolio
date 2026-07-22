import React from "react";
import { motion } from "motion/react";
import styles from "./style.module.scss";
import { opacity } from "../../anim";

interface IndexProps {
  src: string;
  isActive: boolean;
}

const Index: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <img
        key={src}
        src={src}
        className="absolute inset-0 h-full w-full object-contain"
        alt={"Image"}
      />
    </motion.div>
  );
};

export default Index;
