import { motion } from "framer-motion";

export default function GlobalExport() {
  const regions = [
    "Europe", "Middle East", "Southeast Asia", "CIS Countries"
  ];

  const dots = [
    { cx: 490, cy: 100, delay: 0 },
    { cx: 560, cy: 165, delay: 0.5 },
    { cx: 700, cy: 200, delay: 1 },
  ];

  return (
    <section id="export" className="py-32 bg-[#2d3d2d] relative overflow-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="font-sans uppercase tracking-[0.25em] text-[#b8965a] text-xs font-semibold mb-4">
            EXPORT NETWORK
          </div>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-[#f5f0e8] tracking-tight">
            A Global Reach
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-16 relative">
          <svg viewBox="0 0 960 480" className="w-full h-auto drop-shadow-sm">
            {/* North America */}
            <path d="M 80 100 C 80 80 100 60 140 70 C 180 75 220 100 230 130 C 240 160 220 190 200 200 C 185 210 160 220 140 215 C 110 205 90 190 80 170 Z" fill="rgba(245,240,232,0.08)" stroke="rgba(184,150,90,0.35)" strokeWidth="0.8" />
            {/* South America */}
            <path d="M 190 220 C 200 215 230 215 240 225 C 260 240 265 270 255 300 C 245 330 220 345 205 335 C 190 325 185 295 187 265 Z" fill="rgba(245,240,232,0.08)" stroke="rgba(184,150,90,0.35)" strokeWidth="0.8" />
            {/* Europe */}
            <path d="M 460 80 C 470 75 500 75 510 85 C 520 95 515 110 505 115 C 490 120 465 115 458 105 Z" fill="rgba(245,240,232,0.08)" stroke="rgba(184,150,90,0.35)" strokeWidth="0.8" />
            {/* Africa */}
            <path d="M 460 190 C 480 185 510 185 520 200 C 530 220 530 260 520 290 C 510 315 490 325 470 320 C 450 315 440 290 438 260 C 436 230 445 195 460 190 Z" fill="rgba(245,240,232,0.08)" stroke="rgba(184,150,90,0.35)" strokeWidth="0.8" />
            {/* Asia */}
            <path d="M 540 80 C 580 70 650 75 700 90 C 740 105 770 130 760 155 C 750 175 720 185 680 185 C 640 185 590 175 560 155 C 535 138 525 100 540 80 Z" fill="rgba(245,240,232,0.08)" stroke="rgba(184,150,90,0.35)" strokeWidth="0.8" />
            {/* Australia */}
            <path d="M 680 280 C 700 270 730 270 745 285 C 760 300 755 325 740 333 C 720 340 698 333 688 318 C 678 305 668 288 680 280 Z" fill="rgba(245,240,232,0.08)" stroke="rgba(184,150,90,0.35)" strokeWidth="0.8" />
            
            {dots.map((dot, i) => (
              <circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r={3}
                fill="#b8965a"
                className="pulse-dot"
                style={{ animationDelay: `${dot.delay}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-[#b8965a]/40 text-[#f5f0e8]/70 font-sans uppercase text-xs px-4 py-2 tracking-widest"
            >
              {region}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}