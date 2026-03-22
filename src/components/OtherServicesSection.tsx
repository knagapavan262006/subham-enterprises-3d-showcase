import otherBg from "@/assets/other-services-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Customer requirement-based services",
  "Flexible pricing options",
  "Bulk order support",
];

export default function OtherServicesSection() {
  const ref = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={otherBg} alt="Other services" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 section-overlay" />

      <div ref={ref} className="animate-reveal container mx-auto px-4 relative z-10 text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Other Services</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-8" style={{ textWrap: 'balance' }}>
          Tailored Solutions for Every Need
        </h2>
        <ul className="inline-flex flex-col items-start gap-4 mb-10">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-primary-foreground/90 text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <div>
          <a
            href="#contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
