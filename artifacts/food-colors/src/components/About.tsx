import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { title: "25+", label: "Years Experience" },
    { title: "40+", label: "Countries Served" },
    { title: "200+", label: "Product Variants" },
    { title: "6", label: "Quality Certifications" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#f7f5f2]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0a0a0a] mb-6">
              Industrial Precision.<br />Global Standards.
            </h2>
            <div className="space-y-6 text-[#0a0a0a]/80 leading-relaxed">
              <p>
                At ChromaIndia, we view food coloration as an exact science. For over two decades, we have engineered 
                synthetic and natural colorants that meet the most rigorous international compliance standards. 
                Our manufacturing process is defined by absolute consistency, batch after batch.
              </p>
              <p>
                We operate at the intersection of chemical precision and global trade, ensuring seamless delivery 
                to large-scale food & beverage manufacturers worldwide. When you partner with us, you are not just 
                buying color—you are securing a reliable link in your supply chain.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 border border-[#e5e5e5] border-t-2 border-t-[#c9a84c] shadow-sm flex flex-col items-start justify-center"
              >
                <div className="text-4xl font-serif font-bold text-[#0a0a0a] mb-2">{stat.title}</div>
                <div className="text-sm font-medium text-[#0a0a0a]/60 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
