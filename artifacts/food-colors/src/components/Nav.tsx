import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Factory", href: "#factory" },
    { label: "Export", href: "#export" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-sm bg-[#f5f0e8]/95 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="/"
            className="font-sans font-extrabold text-lg text-[#1f2b21] tracking-tight"
            data-testid="nav-logo"
          >
            ASHWINI INDUSTRIES
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans font-medium uppercase text-xs tracking-widest text-[#3a3a35] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#b8965a] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left border-t-[color:var(--color-white)] border-r-[color:var(--color-white)] border-b-[color:var(--color-white)] border-l-[color:var(--color-white)]"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-[#3a3a35]"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="nav-mobile-open"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#1f2b21] flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="absolute top-6 right-6 text-[#f5f0e8]"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="nav-mobile-close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="font-sans font-bold text-3xl text-[#f5f0e8] hover:text-[#b8965a] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
