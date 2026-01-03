import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

export default function ScaleFadeText({
  texts,
  interval = 2500,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, interval);
    return () => clearInterval(id);
  }, [texts.length, interval]);

  return (
    <div className="relative h-[2.2em] md:h-[2.4em] p-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`absolute inset-0 flex items-center justify-center ${className}`}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}