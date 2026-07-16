import { motion } from "framer-motion";

interface HeroProps {
  visible: boolean;
}

export default function Hero({ visible }: HeroProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="hero" className="relative w-full min-h-[92dvh] bg-[#1f2b21] flex items-center overflow-hidden">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-32">
        {visible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-4xl"
          >
            <motion.div
              variants={itemVariants}
              className="font-sans uppercase tracking-[0.25em] text-[#b8965a] text-xs font-semibold mb-6"
            >
              Ashwini Industries · Est. 1990 · Ahmedabad, India
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold text-[#f5f0e8] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(38px, 6vw, 76px)" }}
            >
              Synthetic Food Colours,
              <br />
              Manufactured to Global Standard.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans font-medium text-[#f5f0e8] text-lg md:text-xl mt-8 max-w-2xl leading-relaxed border-l-2 border-[#b8965a] pl-5"
            >
              35+ years manufacturing certified food colours, exported to 10+ countries.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-10">
              <a
                href="#contact"
                data-testid="link-hero-inquiry"
                className="font-sans font-semibold uppercase tracking-widest text-xs text-[#1f2b21] bg-[#f5f0e8] px-6 py-3.5 hover:bg-[#b8965a] hover:text-[#f5f0e8] transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="#products"
                data-testid="link-hero-products"
                className="font-sans font-semibold uppercase tracking-widest text-xs text-[#f5f0e8] border border-[#f5f0e8]/40 px-6 py-3.5 hover:border-[#b8965a] hover:text-[#b8965a] transition-colors"
              >
                View Product Range
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>

      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 border-t border-[#f5f0e8]/10"
        >
          <div className="container mx-auto px-6 md:px-12 py-6 flex flex-wrap gap-x-10 gap-y-2 font-sans text-[#f5f0e8]/60 text-xs uppercase tracking-widest">
            <span>ISO 22000:2018</span>
            <span>FSSAI Licensed</span>
            <span>Halal Certified</span>
            <span>IEC Registered</span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
