import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 border-t-[3px] border-[#c9a84c]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="font-serif text-2xl font-bold tracking-wide mb-4">ChromaIndia</div>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              Premium Food Color Manufacturer & Exporter. Engineering precision colors for the global food & beverage industry since 1998.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-2">Quick Links</h4>
            <a href="#about" className="text-sm text-white/80 hover:text-[#c9a84c] w-fit">About Us</a>
            <a href="#products" className="text-sm text-white/80 hover:text-[#c9a84c] w-fit">Products</a>
            <a href="#certifications" className="text-sm text-white/80 hover:text-[#c9a84c] w-fit">Certifications</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-[#c9a84c] w-fit">Contact</a>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#0a0a0a] transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#0a0a0a] transition-all" aria-label="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} ChromaIndia. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
