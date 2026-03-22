import { Building2, Palette, Gift, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Building2,
    title: "Construction Services",
    desc: "Complete raw materials, skilled labour, and construction planning support.",
    color: "from-primary/80 to-primary",
  },
  {
    icon: Palette,
    title: "Interior Services",
    desc: "Modular kitchens, false ceilings, wallpaper, PVC works, and custom furniture.",
    color: "from-highlight/80 to-highlight",
  },
  {
    icon: Gift,
    title: "Function Services",
    desc: "Return gifts, sarees, custom items for weddings and grand celebrations.",
    color: "from-accent/80 to-accent",
  },
  {
    icon: Wrench,
    title: "Other Services",
    desc: "Custom requirement-based solutions with flexible pricing and bulk support.",
    color: "from-primary/60 to-primary/90",
  },
];

export default function ServicesOverview() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="animate-reveal container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-highlight font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground" style={{ textWrap: 'balance' }}>
            Our Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card rounded-2xl p-8 hover-lift cursor-default group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
