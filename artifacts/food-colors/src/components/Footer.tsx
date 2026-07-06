import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3a3a35] w-full">
      <div className="h-[1px] w-full bg-[#b8965a]/40" />
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          <div className="flex flex-col gap-4">
            <div className="font-sans font-extrabold text-2xl text-[#f5f0e8] tracking-tight">ASHWINI INDUSTRIES</div>
            <p className="font-sans font-light text-[#f5f0e8]/70 text-sm max-w-sm leading-relaxed">
              Crafting Color with Precision & Legacy since 1990. Ahmedabad's trusted manufacturer and exporter of high-grade synthetic food colorants.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-sans uppercase tracking-widest text-[#b8965a] text-xs mb-2">Quick Links</h4>
            <a href="#about" className="font-sans font-light text-[#f5f0e8]/70 text-sm hover:text-[#b8965a] w-fit transition-colors">Heritage</a>
            <a href="#products" className="font-sans font-light text-[#f5f0e8]/70 text-sm hover:text-[#b8965a] w-fit transition-colors">Products</a>
            <a href="#factory" className="font-sans font-light text-[#f5f0e8]/70 text-sm hover:text-[#b8965a] w-fit transition-colors">Infrastructure</a>
            <a href="#contact" className="font-sans font-light text-[#f5f0e8]/70 text-sm hover:text-[#b8965a] w-fit transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-sans uppercase tracking-widest text-[#b8965a] text-xs mb-2">Legal</h4>
            <a href="#" className="font-sans font-light text-[#f5f0e8]/70 text-sm hover:text-[#b8965a] w-fit transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans font-light text-[#f5f0e8]/70 text-sm hover:text-[#b8965a] w-fit transition-colors">Terms of Service</a>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#f5f0e8]/40 hover:text-[#f5f0e8] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#f5f0e8]/10 font-sans font-light text-[#9e9990]/60 text-xs">
          <p>&copy; {new Date().getFullYear()} Ashwini Industries. All rights reserved.</p>
          <p>Made in India</p>
        </div>
      </div>
    </footer>
  );
}