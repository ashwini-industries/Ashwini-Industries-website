import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function GlobalExport() {
  const regions = [
    "Europe", "Middle East", "Southeast Asia", "North America", "Africa", "CIS Countries"
  ];

  const highlights = [
    "Unwavering reliability in supply chains",
    "On-time global delivery logistics",
    "Comprehensive export documentation support"
  ];

  return (
    <section id="global-export" className="py-24 md:py-32 bg-[#f0eeeb]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4"
          >
            Serving the World
          </motion.h2>
        </div>

        {/* Abstract Map Area */}
        <div className="max-w-4xl mx-auto mb-16 relative aspect-[2/1] border border-[#d5d5d5] bg-[#f7f5f2] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}></div>
          <p className="font-serif text-2xl text-[#0a0a0a]/30 tracking-widest relative z-10">[ GLOBAL REACH ]</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-[#e5e5e5] py-3 px-4 text-center text-sm font-medium text-[#0a0a0a]"
            >
              {region}
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
              <p className="text-sm text-[#0a0a0a]/80 font-medium">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
