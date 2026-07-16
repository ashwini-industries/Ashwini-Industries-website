import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Heritage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const stats = [
    { number: "35+", label: "Years of Manufacturing" },
    { number: "10+", label: "Countries Exported To" },
    { number: "7", label: "Certified Colorants" },
    { number: "6", label: "Quality Standards Met" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      <motion.div className="absolute inset-0 bg-white" style={{ opacity: bgOpacity }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative">

          <div className="hidden md:block absolute left-[55%] top-0 h-full w-[1px] bg-[#e8dcc8] -translate-x-1/2" />

          <div className="md:w-[55%] flex flex-col justify-center md:pr-16">
            <div className="overflow-hidden">
              <motion.blockquote
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-semibold text-2xl md:text-3xl leading-[1.4] text-[#1f2b21] mb-8"
              >
                "For over three decades, we have engineered color with the patience of craftsmen and the precision of scientists."
              </motion.blockquote>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans font-medium text-[#3a3a35] text-sm"
            >
              — Jagdish Agrawal, Founder, Ashwini Industries
            </motion.p>
          </div>

          <div className="md:w-[45%] flex flex-col gap-0 md:pl-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-6 py-7 border-b border-[#e8dcc8] last:border-b-0"
              >
                <span className="font-sans font-extrabold text-5xl md:text-6xl text-[#2d3d2d] leading-none tabular-nums w-24 shrink-0">
                  {stat.number}
                </span>
                <span className="font-sans font-bold uppercase tracking-[0.1em] text-xs text-[#3a3a35]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
