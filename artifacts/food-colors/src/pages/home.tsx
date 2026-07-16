import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import Factory from "@/components/Factory";
import GlobalExport from "@/components/GlobalExport";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  function handleLoaderComplete() {
    setTimeout(() => {
      setIsLoading(false);
      setHeroVisible(true);
    }, 300);
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative">
      <div className="grain-overlay" aria-hidden="true" />
      <AnimatePresence>
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      <Nav />
      <Hero visible={heroVisible} />
      <Heritage />
      <Products />
      <Factory />
      <GlobalExport />
      <Certifications />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}