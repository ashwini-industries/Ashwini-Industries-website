import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2d3d2d]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      onAnimationComplete={() => {}}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="flex flex-col items-center gap-5"
      >
        <span className="font-serif italic font-semibold text-5xl md:text-6xl text-[#f5f0e8] tracking-wide">
          Ashwini Industries
        </span>
        <motion.div
          className="h-[1px] bg-[#b8965a] origin-center"
          initial={{ scaleX: 0, width: "6rem" }}
          animate={{ scaleX: 1, width: "6rem" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          onAnimationComplete={onComplete}
        />
      </motion.div>
    </motion.div>
  );
}