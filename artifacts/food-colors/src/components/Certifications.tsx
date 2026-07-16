import { motion } from "framer-motion";
import { ShieldCheck, Download } from "lucide-react";
import { toast } from "sonner";

export default function Certifications() {
  const certs = [
    { title: "ISO 22000:2018", note: "Food Safety Management Systems" },
    { title: "FSSAI", note: "Food Safety Standards Authority of India" },
    { title: "Halal", note: "Compliant with Global Halal Standards" },
    { title: "IEC", note: "Importer Exporter Code — DGFT, India" },
  ];

  function handleRequest(title: string) {
    toast.success("Request Sent", {
      description: `A scanned copy of the ${title} certificate will be emailed to you.`,
    });
  }

  return (
    <section id="certifications" className="py-24 md:py-32 bg-[#2d3d2d] relative overflow-hidden">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-sans uppercase tracking-[0.25em] text-[#b8965a] text-xs font-semibold mb-3">
              COMPLIANCE
            </div>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#f5f0e8] tracking-tight">
              Certifications & Trust
            </h2>
          </div>
          <p className="font-sans text-[#9e9990] text-sm max-w-xs leading-relaxed md:text-right">
            Every batch we produce meets the requirements of international food safety and trade standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-[#f5f0e8]/15 bg-[#f5f0e8]/5 p-6 flex flex-col hover:border-[#b8965a]/60 transition-colors"
              data-testid={`card-cert-${i}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#b8965a]/15 border border-[#b8965a]/40 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-[#b8965a]" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans font-bold text-base text-[#f5f0e8] mb-1">
                {cert.title}
              </h3>
              <p className="font-sans text-xs text-[#9e9990] mb-6 leading-relaxed flex-1">
                {cert.note}
              </p>
              <button
                onClick={() => handleRequest(cert.title)}
                data-testid={`button-request-cert-${i}`}
                className="flex items-center gap-1.5 font-sans font-semibold uppercase tracking-widest text-[10px] text-[#b8965a] hover:text-[#f5f0e8] transition-colors w-fit"
              >
                <Download className="w-3 h-3" />
                Request PDF
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
