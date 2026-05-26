import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full h-[100dvh] bg-[#0a0a0a] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#c9a84c]"></div>
            <span className="text-[#c9a84c] uppercase tracking-[0.2em] text-sm font-medium">Est. 1998 • Mumbai</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Premium Food Color Manufacturer & Exporter from India
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-2xl">
            Delivering uncompromised quality and consistency in synthetic and natural food colorants. 
            Trusted by food & beverage manufacturers across 40+ countries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300 font-medium text-sm tracking-wide uppercase"
              data-testid="link-explore-products"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f7f5f2] text-[#0a0a0a] hover:bg-white transition-all duration-300 font-medium text-sm tracking-wide uppercase"
              data-testid="link-contact-hero"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
