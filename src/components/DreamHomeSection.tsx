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

export default function DreamHomeSection() {
  return (
    <section id="dreamhome" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-highlight font-semibold text-sm uppercase tracking-widest mb-3">Dream Home Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground" style={{ textWrap: 'balance' }}>
            Building Your Dream, Stage by Stage
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {stages.map((stage, idx) => {
            const Wrapper = ({ children }: { children: React.ReactNode }) => {
              const ref = useScrollReveal();
              return <div ref={ref} className="animate-reveal">{children}</div>;
            };

            return (
              <Wrapper key={stage.title}>
                <div className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}>
                  <div className="lg:w-1/2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={stage.img}
                        alt={stage.title}
                        className="w-full h-64 md:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -top-3 -left-3 bg-accent text-accent-foreground px-4 py-1.5 rounded-lg font-bold text-sm shadow-lg">
                      {stage.label}
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                      {stage.title}
                    </h3>
                    <ul className="space-y-3">
                      {stage.services.map((s) => (
                        <li key={s} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-highlight mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
