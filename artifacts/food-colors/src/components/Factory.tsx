import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Factory() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const outer = outerRef.current;
    const strip = stripRef.current;
    
    if (outer && strip) {
      const ctx = gsap.context(() => {
        gsap.to(strip, {
          xPercent: -75,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            pin: true,
            scrub: 1,
            end: () => `+=${outer.offsetWidth * 3}`,
          },
        });
      }, outer);
      
      return () => ctx.revert();
    }
  }, []);

  const panels = [
    {
      num: "01",
      bg: "#c8b89a",
      title: "Manufacturing Plant",
      caption: "State-of-the-art facilities engineered for scale and precision.",
    },
    {
      num: "02",
      bg: "#9e9990",
      title: "Quality Testing Lab",
      caption: "Rigorous analytical testing ensuring uncompromised purity.",
    },
    {
      num: "03",
      bg: "#8a9e8a",
      title: "Packaging Unit",
      caption: "Automated filling lines maintaining sterile environments.",
    },
    {
      num: "04",
      bg: "#6b7c5a",
      title: "Automated Machinery",
      caption: "Advanced robotics delivering consistency in every batch.",
    },
  ];

  return (
    <section id="factory" className="bg-[#e8dcc8] relative overflow-hidden">
      <div className="absolute top-16 left-6 md:left-12 z-10 pointer-events-none">
        <div className="font-sans uppercase tracking-widest text-[#3a3a35]/60 text-xs mb-4">
          THE FACILITY
        </div>
        <h2 className="font-serif italic font-semibold text-5xl text-[#3a3a35]">
          World-Class Infrastructure
        </h2>
      </div>

      <div ref={outerRef} className="md:h-[100vh] w-full flex flex-col md:block">
        <div ref={stripRef} className="flex flex-col md:flex-row h-full w-full md:w-[400vw]">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="w-full md:w-[100vw] h-[100vh] inline-flex flex-col justify-end p-8 md:p-16 relative"
              style={{ backgroundColor: panel.bg }}
            >
              <div className="absolute top-16 right-8 md:right-16 font-serif font-light text-[80px] md:text-[120px] text-white/10 leading-none pointer-events-none">
                {panel.num}
              </div>
              <div className="max-w-xl">
                <h3 className="font-serif italic font-normal text-3xl md:text-4xl text-[#f5f0e8] mb-4">
                  {panel.title}
                </h3>
                <p className="font-sans font-light text-sm text-[#3a3a35]/80 max-w-sm leading-relaxed">
                  {panel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}