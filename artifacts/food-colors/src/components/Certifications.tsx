import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { title: "ISO 22000:2018", note: "Food Safety Management Systems", year: "Certified" },
    { title: "FSSAI", note: "Food Safety Standards Authority of India", year: "Licensed" },
    { title: "Halal", note: "Compliant with Global Halal Standards", year: "Certified" },
    { title: "IEC", note: "Importer Exporter Code — DGFT, India", year: "Registered" },
  ];

  return (
    <section id="certifications" className="py-32 md:py-40 bg-[#2d3d2d] relative overflow-hidden">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic font-semibold text-5xl md:text-6xl text-[#f5f0e8]"
            >
              Compliance & Trust
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans font-light text-[#9e9990] text-sm max-w-xs leading-relaxed md:text-right"
          >
            Every batch we produce meets the requirements of international food safety and trade standards.
          </motion.p>
        </div>

        <div className="flex flex-col divide-y divide-[#f5f0e8]/10">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-4 md:gap-0"
            >
              <div className="flex items-center gap-8">
                <span className="font-sans text-[#b8965a]/50 text-xs tabular-nums w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif font-semibold text-2xl md:text-3xl text-[#f5f0e8] group-hover:text-[#b8965a] transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
              <div className="flex items-center gap-12 md:gap-16 ml-14 md:ml-0">
                <p className="font-sans font-light text-sm text-[#9e9990] max-w-xs">
                  {cert.note}
                </p>
                <span className="hidden md:block font-sans uppercase tracking-widest text-[10px] text-[#b8965a]/70 border border-[#b8965a]/30 px-3 py-1 shrink-0">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
