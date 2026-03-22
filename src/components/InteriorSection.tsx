import interiorBg from "@/assets/interior-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const items = [
  "PVC, WPC & Soffit ceiling works",
  "Wallpaper & painting",
  "False ceiling designs",
  "Modular interiors",
  "Custom furniture works",
];

export default function InteriorSection() {
  const ref = useScrollReveal();

  return (
    <section id="interior" className="relative py-24 md:py-32 overflow-hidden">
      <img src={interiorBg} alt="Interior design" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 section-overlay" />

      <div ref={ref} className="animate-reveal container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Interior Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-8" style={{ textWrap: 'balance' }}>
            Transform Your Space Into a Masterpiece
          </h2>
          <ul className="space-y-4 mb-10">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/90 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            Get Interior Quote
          </a>
        </div>
      </div>
    </section>
  );
}
