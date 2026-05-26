import { motion } from "framer-motion";
import { Beaker, Layers, Blend, Settings, Factory } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "01",
      title: "Synthetic Food Colors",
      description: "Primary food colors with uncompromising purity, delivering vibrant and stable hues for extensive applications.",
      icon: <Beaker className="w-8 h-8" strokeWidth={1} />,
    },
    {
      id: "02",
      title: "Lake Colors",
      description: "Water-insoluble pigments optimized for high fat/oil products and dry powder applications.",
      icon: <Layers className="w-8 h-8" strokeWidth={1} />,
    },
    {
      id: "03",
      title: "Blended Colors",
      description: "Precision-engineered secondary colors crafted from primary blends to achieve exact, repeatable shades.",
      icon: <Blend className="w-8 h-8" strokeWidth={1} />,
    },
    {
      id: "04",
      title: "Custom Formulations",
      description: "Tailored color solutions developed in our labs to match your specific product and process requirements.",
      icon: <Settings className="w-8 h-8" strokeWidth={1} />,
    },
    {
      id: "05",
      title: "Industrial Additives",
      description: "Specialized non-color additives ensuring product stability, texture, and extended shelf life.",
      icon: <Factory className="w-8 h-8" strokeWidth={1} />,
    },
  ];

  return (
    <section id="products" className="pt-32 pb-48 bg-[#f5f0e8]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-sans uppercase tracking-[0.3em] text-[#9e9990] text-xs mb-4">
            PRODUCTS
          </div>
          <h2 className="font-serif italic font-semibold text-5xl text-[#3a3a35]">
            Our Range
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                className="flex flex-col md:flex-row items-start md:items-center py-12 px-6 gap-8 relative overflow-hidden transition-colors duration-500 hover:bg-[#e8dcc8]/30"
              >
                {/* Number */}
                <motion.div
                  variants={{
                    initial: { color: "#e8dcc8", opacity: 0.5 },
                    hover: { color: "rgba(184, 150, 90, 0.3)", opacity: 1 },
                  }}
                  className="font-serif font-light text-8xl md:w-32 shrink-0 leading-none"
                >
                  {product.id}
                </motion.div>

                {/* Content */}
                <div className="flex-grow flex flex-col gap-2">
                  <motion.h3
                    variants={{
                      initial: { color: "#3a3a35" },
                      hover: { color: "#b8965a" },
                    }}
                    className="font-serif font-semibold text-2xl"
                  >
                    {product.title}
                  </motion.h3>
                  <p className="font-sans font-light text-[#9e9990] text-sm max-w-xl leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="text-[#b8965a] shrink-0 md:pl-8">
                  {product.icon}
                </div>
              </motion.div>
              <hr className="border-t border-[#e8dcc8] w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}