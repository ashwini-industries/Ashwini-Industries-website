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
    { number: "35+", label: "Years of Precision" },
    { number: "10+", label: "Countries Served" },
    { number: "7", label: "Certified Colorants" },
    { number: "6", label: "Quality Standards" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <motion.div
        className="absolute inset-0 bg-[#f5f0e8]"
        style={{ opacity: bgOpacity }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-24 relative">

          <div className="hidden md:block absolute left-[55%] top-0 h-full w-[1px] bg-[#b8965a]/20 -translate-x-1/2" />

          <div className="md:w-[55%] flex flex-col justify-center md:pr-16">
            <div className="overflow-hidden">
              <motion.blockquote
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic font-normal text-3xl md:text-5xl leading-[1.3] text-[#3a3a35] mb-8"
              >
                "For over three decades, we have engineered color with the patience of craftsmen and the precision of scientists."
              </motion.blockquote>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-sans font-light text-[#9e9990] text-sm"
            >
              — Ashwini Industries, Est. 1990
            </motion.p>
          </div>

          <div className="md:w-[45%] flex flex-col gap-0 md:pl-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-6 py-8 border-b border-[#e8dcc8] last:border-b-0"
              >
                <span className="font-serif font-light text-6xl md:text-7xl text-[#b8965a] leading-none tabular-nums w-28 shrink-0">
                  {stat.number}
                </span>
                <span className="font-sans font-light uppercase tracking-[0.18em] text-[11px] text-[#9e9990] leading-relaxed">
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
