import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Certifications", href: "#certifications" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Global Export", href: "#global-export" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a] shadow-md border-b border-white/10" : "bg-[#0a0a0a]"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
        <a href="#" className="flex flex-col group text-white">
          <span className="font-serif text-2xl font-bold tracking-wide">ChromaIndia</span>
          <span className="h-[2px] w-8 bg-[#c9a84c] group-hover:w-full transition-all duration-500"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-[#c9a84c] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/80 hover:text-[#c9a84c] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      <div className="h-[1px] w-full bg-[#1a1a1a]"></div>
    </nav>
  );
}
