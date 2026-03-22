import heroBg from "@/assets/hero-bg.jpg";
import { Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HeroSection() {
  const ref = useScrollReveal();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Dream home and construction"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />

      <div ref={ref} className="animate-reveal container mx-auto relative z-10 px-4 py-32">
        <div className="max-w-2xl">
          <p className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
            Your Trusted Partner
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6" style={{ textWrap: 'balance' }}>
            Dream Home to Grand Functions –{" "}
            <span className="text-gradient">We Provide Everything</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            From construction materials to interior design to function return gifts — your complete one-stop solution.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:8790588644"
              className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-primary-foreground/20 active:scale-[0.97]"
            >
              <Phone className="w-5 h-5" />
              8790588644
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
