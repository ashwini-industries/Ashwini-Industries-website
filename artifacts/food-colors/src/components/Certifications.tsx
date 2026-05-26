import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck2, Globe2, FlaskConical } from "lucide-react";

export default function Certifications() {
  const certs = [
    { icon: <ShieldCheck />, title: "ISO 9001:2015", note: "Quality Management Systems" },
    { icon: <Award />, title: "FSSAI Certified", note: "Food Safety Standards Authority" },
    { icon: <FileCheck2 />, title: "GMP Compliant", note: "Good Manufacturing Practices" },
    { icon: <Globe2 />, title: "Export Compliance", note: "International Trade Ready" },
    { icon: <FlaskConical />, title: "Lab Tested Quality", note: "Rigorous In-House Testing" },
  ];

  return (
    <section id="certifications" className="py-24 bg-[#f7f5f2]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Quality & Compliance</h2>
          <p className="text-[#0a0a0a]/70 max-w-2xl mx-auto">
            Our commitment to purity and safety is backed by internationally recognized certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-[#e5e5e5] p-6 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0eeeb] text-[#0a0a0a] group-hover:bg-[#c9a84c] group-hover:text-white transition-colors mb-4">
                {cert.icon}
              </div>
              <h3 className="font-bold text-[#0a0a0a] text-sm mb-1">{cert.title}</h3>
              <p className="text-xs text-[#0a0a0a]/60">{cert.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
