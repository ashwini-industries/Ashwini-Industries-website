import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";

export default function Location() {
  const trustItems = [
    "Manufacturing Facility",
    "Quality Control Laboratory",
    "Export Operations",
    "Industry Certifications",
  ];

  return (
    <section id="location" className="py-32 md:py-40 bg-[#f5f0e8] relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans uppercase tracking-[0.25em] text-[#9e9990] text-xs mb-4"
            >
              LOCATION
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic font-semibold text-5xl md:text-6xl text-[#3a3a35]"
              >
                Visit Our Facility
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans font-light text-[#9e9990] text-sm max-w-sm leading-relaxed md:text-right"
          >
            Located in Ahmedabad, India — where three decades of manufacturing expertise meet modern quality standards.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(184, 150, 90, 0.3)",
              boxShadow: "0 24px 64px rgba(58, 58, 53, 0.12), 0 4px 16px rgba(58, 58, 53, 0.06)",
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Ashwini+Industries,23.0954783,72.6739307&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="520"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashwini Industries — Manufacturing Facility"
              data-testid="map-facility"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-6 left-6 max-w-xs"
              style={{
                background: "rgba(245, 240, 232, 0.97)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(184, 150, 90, 0.25)",
                borderRadius: "2px",
                boxShadow: "0 8px 32px rgba(58, 58, 53, 0.15)",
                padding: "28px 28px 24px",
              }}
            >
              <p className="font-sans uppercase tracking-[0.2em] text-[#b8965a] text-[10px] mb-1">
                Est. 1990
              </p>
              <h3 className="font-serif font-semibold text-xl text-[#3a3a35] mb-1 leading-tight">
                Ashwini Industries
              </h3>
              <p className="font-sans font-light text-[#9e9990] text-xs mb-5 leading-relaxed">
                Food Colour Manufacturer & Exporter
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <MapPin className="w-3.5 h-3.5 text-[#b8965a] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="font-sans font-light text-[#3a3a35] text-xs leading-relaxed">
                    203+204/2, Near Jain Dairy<br />
                    Phase 2, GIDC, Naroda<br />
                    Ahmedabad — 382330, Gujarat
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-3.5 h-3.5 text-[#b8965a] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="font-sans font-light text-[#3a3a35] text-xs">
                    +91 98980 45966
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#e8dcc8]">
                <a
                  href="https://maps.app.goo.gl/cHswsQWsWknyP3Pp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-get-directions"
                  className="flex items-center gap-1.5 font-sans uppercase tracking-widest text-[10px] text-[#f5f0e8] bg-[#3a3a35] px-4 py-2.5 hover:bg-[#2d3d2d] transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Directions
                </a>
                <a
                  href="#contact"
                  data-testid="link-contact-from-map"
                  className="flex items-center font-sans uppercase tracking-widest text-[10px] text-[#3a3a35] border border-[#3a3a35]/30 px-4 py-2.5 hover:border-[#b8965a] hover:text-[#b8965a] transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-12 border border-[#e8dcc8]">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 px-6 py-5 border-r border-[#e8dcc8] last:border-r-0 md:border-r [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(3)]:border-t md:[&:nth-child(3)]:border-t-0"
            >
              <div className="w-1 h-1 rounded-full bg-[#b8965a] shrink-0" />
              <span className="font-sans font-light text-[#3a3a35] text-xs tracking-wide">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
