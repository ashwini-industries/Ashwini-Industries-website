import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import Infrastructure from "@/components/Infrastructure";
import GlobalExport from "@/components/GlobalExport";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Certifications />
      <Infrastructure />
      <GlobalExport />
      <Contact />
      <Footer />
    </main>
  );
}
