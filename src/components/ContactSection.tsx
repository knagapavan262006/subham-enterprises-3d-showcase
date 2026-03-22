import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. My requirement: ${form.requirement}. Contact: ${form.phone}`;
    window.open(`https://wa.me/918790588644?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div ref={ref} className="animate-reveal container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4" style={{ textWrap: 'balance' }}>
            Call For Free Consultation
          </h2>
          <a
            href="tel:8790588644"
            className="inline-flex items-center gap-3 text-accent text-2xl md:text-3xl font-bold hover:scale-105 transition-transform duration-200"
          >
            <Phone className="w-7 h-7" />
            8790588644
          </a>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Your Requirement</label>
              <textarea
                required
                rows={4}
                value={form.requirement}
                onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow resize-none"
                placeholder="Describe what you need..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-highlight text-primary-foreground px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
            >
              <Send className="w-5 h-5" />
              {submitted ? "Sent via WhatsApp!" : "Send via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
