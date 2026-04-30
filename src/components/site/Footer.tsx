import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">DECODETECH</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Govt. recognized IT & Cyber Security training with hands-on labs and
              guaranteed placement support.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/courses" className="hover:text-primary-foreground">Courses</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Top Courses</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Cyber Security Expert</li>
              <li>Ethical Hacking</li>
              <li>Data Science & AI</li>
              <li>Python Programming</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Sector 18, Cyber Hub, Gurugram</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 98765 43210</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> hello@decodetech.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} DECODETECH Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <p>Govt. Recognized • MEITY • NSDC Partner</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
