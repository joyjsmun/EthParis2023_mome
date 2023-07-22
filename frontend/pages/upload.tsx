import UploadMoment from "@/components/uploadMoment";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0.2, x: 0, y: -80 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0.2, x: -0, y: -80 },
};

export default function upload() {
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
        className="text-white h-screen absolute w-full top-0"
      >
        <UploadMoment />
      </motion.div>
    </AnimatePresence>
  );
}
