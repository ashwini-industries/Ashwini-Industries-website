import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { title: "ISO 9001:2015", note: "Quality Management Systems" },
    { title: "FSSAI Certified", note: "Food Safety Standards Authority" },
    { title: "GMP Compliant", note: "Good Manufacturing Practices" },
    { title: "Export Compliance", note: "International Trade Ready" },
    { title: "Lab Tested & Certified", note: "Rigorous In-House Testing" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="certifications" className="py-32 bg-[#f5f0e8]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif font-semibold text-5xl text-[#3a3a35]">
            Compliance & Trust
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-6"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex-1 min-w-[280px] border border-[#e8dcc8] p-8 flex flex-col bg-[#f5f0e8]"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)" }}
            >
              <div className="w-12 h-12 rounded-full bg-[#8a9e8a] flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#6b7c5a]" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-[#3a3a35] mt-4">
                {cert.title}
              </h3>
              <p className="font-sans font-light text-xs text-[#9e9990] mt-2">
                {cert.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}