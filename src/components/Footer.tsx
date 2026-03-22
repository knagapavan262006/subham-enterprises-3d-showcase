import logo from "@/assets/logo.png";
import { Phone, MapPin, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/subham_enterprises_mtm?igsh=bzE4d3c5M2Y0NGZh";

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Subham Enterprises"
              className="w-10 h-10 rounded-lg shadow-md"
            />
            <div>
              <div className="text-primary-foreground font-heading text-lg font-bold">Subham Enterprises</div>
              <div className="text-primary-foreground/60 text-xs tracking-widest uppercase">One Stop Solution</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70 text-sm">
            <a href="tel:8790588644" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> 8790588644
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> India
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:scale-110 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.6)]"
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full shadow-md"
                style={{ background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}
              >
                <Instagram className="w-4 h-4 text-white" />
              </span>
              <span className="text-primary-foreground/70 text-sm">Follow us on Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Subham Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
