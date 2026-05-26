import { motion } from "framer-motion";

export default function Infrastructure() {
  const images = [
    { label: "Manufacturing Plant" },
    { label: "Quality Testing Lab" },
    { label: "Packaging Unit" },
    { label: "Automated Machinery" },
  ];

  return (
    <section id="infrastructure" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-[#c9a84c]"></div>
              <span className="text-[#c9a84c] uppercase tracking-[0.2em] text-xs font-semibold">Facilities</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">World-Class Infrastructure</h2>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base leading-relaxed">
            Our state-of-the-art manufacturing facility is designed for high-capacity output without compromising on meticulous quality control. Equipped with cutting-edge technology and dedicated testing labs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[4/3] bg-[#1a1a1a] border border-white/5 hover:border-[#c9a84c] transition-colors group overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-2xl group-hover:text-white/40 transition-colors">
                [ {img.label} ]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
