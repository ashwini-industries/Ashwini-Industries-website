import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const machineryPhoto = `${import.meta.env.BASE_URL}factory-tanks.jpg`;

const panels = [
  {
    num: "01",
    title: "Manufacturing Plant",
    caption: "State-of-the-art facilities engineered for scale and precision.",
    photo: null,
  },
  {
    num: "02",
    title: "Quality Control Laboratory",
    caption: "Rigorous analytical testing ensuring uncompromised purity.",
    photo: null,
  },
  {
    num: "03",
    title: "Packaging Line",
    caption: "Automated filling lines maintaining sterile, contamination-free handling.",
    photo: null,
  },
  {
    num: "04",
    title: "Machinery & Equipment",
    caption: "Advanced processing equipment delivering consistency in every batch.",
    photo: machineryPhoto,
  },
];

export default function Factory() {
  return (
    <section id="factory" className="py-24 md:py-32 bg-[#f5f0e8]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="font-sans uppercase tracking-[0.25em] text-[#9e9990] text-xs font-semibold mb-3">
              THE FACILITY
            </div>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#1f2b21] tracking-tight">
              World-Class Infrastructure
            </h2>
          </div>
          <p className="font-sans text-[#3a3a35]/70 text-sm max-w-md leading-relaxed">
            Our GIDC Naroda facility runs high-capacity production alongside dedicated
            quality control, engineered for consistent, export-grade output.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {panels.map((panel, i) =>
            panel.photo ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative aspect-[4/3] overflow-hidden group"
                data-testid={`facility-photo-${i}`}
              >
                <img
                  src={panel.photo}
                  alt={panel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-sans font-bold text-base text-white">
                    {panel.title}
                  </h3>
                  <p className="font-sans text-xs text-white/75 leading-relaxed mt-1">
                    {panel.caption}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-2 border-dashed border-[#c9b896] bg-white/60 aspect-[4/3] flex flex-col items-center justify-center gap-3 p-8 text-center"
                data-testid={`placeholder-facility-${i}`}
              >
                <ImageIcon className="w-8 h-8 text-[#b8965a]/50" strokeWidth={1.25} />
                <h3 className="font-sans font-bold text-base text-[#1f2b21]">
                  {panel.title}
                </h3>
                <p className="font-sans text-xs text-[#3a3a35]/60 max-w-[220px] leading-relaxed">
                  {panel.caption}
                </p>
                <span className="font-sans uppercase tracking-widest text-[10px] text-[#9e9990] mt-1">
                  Photo Coming Soon
                </span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
