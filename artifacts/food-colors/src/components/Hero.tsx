import { motion } from "framer-motion";

interface HeroProps {
  visible: boolean;
}

export default function Hero({ visible }: HeroProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative w-full h-[100dvh] bg-[#2d3d2d] flex items-center justify-center overflow-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {visible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-5xl"
          >
            <motion.div variants={itemVariants} className="h-[1px] w-[80px] bg-[#b8965a] mb-8" />
            
            <motion.h1 variants={itemVariants} className="flex flex-col gap-2">
              <span className="font-serif italic font-bold text-[#f5f0e8] leading-[1.1]" style={{ fontSize: "clamp(64px, 10vw, 140px)" }}>
                Crafting Color
              </span>
              <span className="font-serif font-light text-[#f5f0e8]/80 leading-[1.1]" style={{ fontSize: "clamp(48px, 8vw, 110px)" }}>
                with Precision & Legacy
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="font-sans font-light text-[#9e9990] text-sm mt-6 max-w-md leading-relaxed">
              India's premier food color manufacturer, trusted by 40+ nations.
            </motion.p>
          </motion.div>
        )}
      </div>

      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-12 font-sans uppercase tracking-widest text-[#9e9990]/60 text-xs"
          >
            EST. 1998 MUMBAI
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-4"
          >
            <span className="font-sans uppercase tracking-widest text-[#9e9990]/60 text-xs" style={{ writingMode: "vertical-rl" }}>
              SCROLL
            </span>
            <div className="w-[1px] h-16 bg-transparent relative overflow-hidden">
              <motion.div
                className="w-full bg-[#b8965a] absolute top-0 left-0 h-full"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
}