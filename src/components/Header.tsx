import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Dream Home", href: "#dreamhome" },
  { label: "Interior", href: "#interior" },
  { label: "Functions", href: "#functions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Subham Enterprises logo"
            className="w-11 h-11 rounded-lg shadow-md transition-transform duration-200 group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <div className="text-primary-foreground font-heading text-lg font-bold leading-tight">
              Subham Enterprises
            </div>
            <div className="text-primary-foreground/70 text-xs tracking-widest uppercase">
              One Stop Solution
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-200 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8790588644"
            className="ml-4 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-primary/98 backdrop-blur-lg border-t border-primary-foreground/10 animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-primary-foreground/90 hover:text-accent font-medium rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8790588644"
              className="mt-2 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call: 8790588644
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
