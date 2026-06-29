import { motion } from "framer-motion";

export default function Heritage() {
  const stats = [
    { number: "35+", label: "Years of Precision" },
    { number: "10+", label: "Countries Served" },
    { number: "7", label: "Certified Colorants" },
    { number: "6", label: "Quality Standards" },
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-[#f5f0e8] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-24 relative">
          
          {/* Desktop divider */}
          <div className="hidden md:block absolute left-[55%] top-0 h-full w-[1px] bg-[#b8965a]/30 -translate-x-1/2" />

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-[55%] flex flex-col justify-center md:pr-16"
          >
            <blockquote className="font-serif italic font-normal text-3xl md:text-5xl leading-relaxed text-[#3a3a35] mb-8">
              "For over two decades, we have engineered color with the patience of craftsmen and the precision of scientists."
            </blockquote>
            <p className="font-sans font-light text-[#9e9990] text-sm">
              — Ashwini Industries, Est. 1990
            </p>
          </motion.div>

          {/* Right Column */}
          <div className="md:w-[45%] flex flex-col gap-16 md:pl-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-start"
              >
                <span className="font-serif font-light text-7xl text-[#b8965a] mb-2 leading-none">
                  {stat.number}
                </span>
                <span className="font-sans font-light uppercase tracking-wider text-xs text-[#9e9990] mb-4">
                  {stat.label}
                </span>
                <div className="h-[1px] w-[40px] bg-[#b8965a]" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}