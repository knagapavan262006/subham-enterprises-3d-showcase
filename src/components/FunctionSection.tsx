import functionBg from "@/assets/function-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Gift, CheckCircle2 } from "lucide-react";

const items = [
  "Ladies & gents return gifts",
  "Sarees & blouse pieces",
  "Custom gift boxes & designed cups",
  "Budget-based customization",
];

export default function FunctionSection() {
  const ref = useScrollReveal();

  return (
    <section id="functions" className="relative py-24 md:py-32 overflow-hidden">
      <img src={functionBg} alt="Wedding function gifts" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 section-overlay" />

      <div ref={ref} className="animate-reveal container mx-auto px-4 relative z-10">
        <div className="max-w-2xl ml-auto text-right lg:text-left">
          <div className="flex items-center gap-3 justify-end lg:justify-start mb-3">
            <Gift className="w-5 h-5 text-accent" />
            <p className="text-accent font-semibold text-sm uppercase tracking-widest">Function Services</p>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-8" style={{ textWrap: 'balance' }}>
            Make Every Celebration Memorable
          </h2>
          <ul className="space-y-4 mb-10">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 justify-end lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0 order-last lg:order-first" />
                <span className="text-primary-foreground/90 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block bg-highlight text-primary-foreground px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            Explore Gift Options
          </a>
        </div>
      </div>
    </section>
  );
}
