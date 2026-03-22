import logo from "@/assets/logo.png";
import { Phone, MapPin } from "lucide-react";

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
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Subham Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
