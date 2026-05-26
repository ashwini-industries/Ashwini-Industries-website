import { motion } from "framer-motion";
import { Beaker, Layers, Blend, Settings, Factory } from "lucide-react";

export default function Products() {
  const products = [
    {
      icon: <Beaker className="w-8 h-8" strokeWidth={1.5} />,
      title: "Synthetic Food Colors",
      description: "Primary food colors with uncompromising purity, delivering vibrant and stable hues for extensive applications."
    },
    {
      icon: <Layers className="w-8 h-8" strokeWidth={1.5} />,
      title: "Lake Colors",
      description: "Water-insoluble pigments optimized for high fat/oil products and dry powder applications."
    },
    {
      icon: <Blend className="w-8 h-8" strokeWidth={1.5} />,
      title: "Blended Colors",
      description: "Precision-engineered secondary colors crafted from primary blends to achieve exact, repeatable shades."
    },
    {
      icon: <Settings className="w-8 h-8" strokeWidth={1.5} />,
      title: "Custom Formulations",
      description: "Tailored color solutions developed in our labs to match your specific product and process requirements."
    },
    {
      icon: <Factory className="w-8 h-8" strokeWidth={1.5} />,
      title: "Industrial Food Additives",
      description: "Specialized non-color additives ensuring product stability, texture, and extended shelf life."
    }
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-[#f0eeeb]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#c9a84c]"></div>
            <span className="text-[#0a0a0a]/60 uppercase tracking-[0.2em] text-xs font-semibold">Portfolio</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a]">Our Product Range</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#f7f5f2] p-8 border border-transparent hover:border-[#c9a84c] hover:bg-[#0a0a0a] transition-all duration-300 cursor-pointer"
            >
              <div className="text-[#0a0a0a] group-hover:text-[#c9a84c] transition-colors mb-6">
                {product.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a0a0a] group-hover:text-[#f7f5f2] transition-colors mb-3">
                {product.title}
              </h3>
              <p className="text-[#0a0a0a]/70 group-hover:text-[#f7f5f2]/70 transition-colors text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
