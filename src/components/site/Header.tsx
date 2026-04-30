import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Shield, Phone, Mail, ChevronDown,
  Facebook, Instagram, Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { to: "/courses", label: "All Courses" },
  { to: "/courses", label: "Cyber Security" },
  { to: "/courses", label: "Ethical Hacking" },
  { to: "/courses", label: "Data Science" },
  { to: "/courses", label: "Python Programming" },
];

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About Us", exact: false },
  { to: "/courses", label: "Courses", exact: false, dropdown: true },
  { to: "/about", label: "Cyber Cell", exact: false },
  { to: "/about", label: "Corporate Training", exact: false },
  { to: "/about", label: "Placement", exact: false },
  { to: "/contact", label: "Contact Us", exact: false },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">

      {/* ── TOP BAR ── */}
      <div className="bg-primary text-primary-foreground text-xs hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          {/* Left: contact info */}
          <div className="flex items-center gap-5">
            <a href="mailto:info@decodetech.com" className="flex items-center gap-1.5 hover:text-primary-glow transition-colors">
              <Mail className="w-3 h-3" />
              info@decodetech.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-primary-glow transition-colors">
              <Phone className="w-3 h-3" />
              +91  86559 66336
            </a>
          </div>
          {/* Right: logins + socials */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-glow transition-colors">Student Login</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-primary-glow transition-colors">Partner Login</a>
            <span className="opacity-40">|</span>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-primary-glow transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary-glow transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary-glow transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <div
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-[0_2px_20px_rgba(10,42,102,0.12)]" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl hero-bg flex items-center justify-center shadow-glow">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-base tracking-tight text-primary">
                DCODE<span className="gradient-text">TECH</span>
              </div>
              <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest -mt-0.5">
                IT Industrial Training
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((l) =>
              "dropdown" in l && l.dropdown ? (
                <div key={l.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors"
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-elegant border border-border/60 py-2 animate-fade-in z-50">
                      {courses.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.to + l.label}
                  to={l.to}
                  activeOptions={{ exact: "exact" in l ? l.exact : false }}
                  activeProps={{ className: "text-primary bg-accent" }}
                  inactiveProps={{ className: "text-foreground/80 hover:text-primary hover:bg-accent/50" }}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hero-bg shadow-glow rounded-full px-5 font-bold tracking-wide text-xs hover:scale-105 transition-transform"
            >
              <Link to="/contact">APPLY NOW</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border/60 shadow-elegant animate-fade-in">
          {/* Mobile top bar info */}
          <div className="bg-primary/5 px-4 py-2 flex items-center gap-4 text-xs text-muted-foreground border-b border-border/40">
            <a href="mailto:info@decodetech.com" className="flex items-center gap-1">
              <Mail className="w-3 h-3" /> info@decodetech.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91 98765 43210
            </a>
          </div>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: "exact" in l ? l.exact : false }}
                activeProps={{ className: "text-primary bg-accent" }}
                className="px-4 py-3 rounded-lg font-medium text-sm hover:bg-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="hero-bg mt-3 rounded-full font-bold tracking-wide" size="lg">
              <Link to="/contact" onClick={() => setOpen(false)}>APPLY NOW</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
