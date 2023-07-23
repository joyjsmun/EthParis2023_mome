"use client";

import { GalleryMoments } from "@/components/galleryMoment";
import { AnimatePresence, motion } from "framer-motion";


const variants = {
  hidden: { opacity: 0.2, x: 0, y: -80 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0.2, x: -0, y: -80 },
};

const Moments = () => {
  return (
    <AnimatePresence
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
      mode="wait"
    >
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 1, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <div className="w-full h-[250vh] grid grid-flow-dense">
          <GalleryMoments />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Moments;
