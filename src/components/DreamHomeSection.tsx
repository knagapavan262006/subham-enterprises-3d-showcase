import beforeImg from "@/assets/before-construction.jpg";
import duringImg from "@/assets/during-construction.jpg";
import afterImg from "@/assets/after-construction.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const stages = [
  {
    label: "Stage 1",
    title: "Before Construction",
    img: beforeImg,
    services: ["Skilled labour supply", "Quality raw materials supply", "Construction planning support"],
  },
  {
    label: "Stage 2",
    title: "During Construction",
    img: duringImg,
    services: ["Sand supply", "Steel supply", "Electrical work", "Plumbing work", "Tiles (flooring)", "Interior works"],
  },
  {
    label: "Stage 3",
    title: "After Construction",
    img: afterImg,
    services: ["Modular kitchen", "Cupboards & wardrobes", "False ceiling & roofing", "Interior finishing"],
  },
];

function StageCard({ stage, idx }: { stage: typeof stages[number]; idx: number }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="animate-reveal relative w-full min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden rounded-2xl shadow-2xl"
      style={{ backgroundAttachment: "fixed" }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${stage.img})` }}
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${
        idx === 2
          ? "bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent"
          : "bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30"
      }`} />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-14 max-w-xl">
        <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-lg font-bold text-sm shadow-lg mb-4">
          {stage.label}
        </span>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6" style={{ lineHeight: 1.1 }}>
          {stage.title}
        </h3>
        <ul className="space-y-3">
          {stage.services.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-white/90 text-base">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function DreamHomeSection() {
  const headerRef = useScrollReveal();

  return (
    <section id="dreamhome" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="animate-reveal text-center mb-20">
          <p className="text-highlight font-semibold text-sm uppercase tracking-widest mb-3">Dream Home Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground" style={{ textWrap: 'balance' }}>
            Building Your Dream, Stage by Stage
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {stages.map((stage, idx) => (
            <StageCard key={stage.title} stage={stage} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
