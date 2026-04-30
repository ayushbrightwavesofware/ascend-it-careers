import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, FlaskConical, Award, Briefcase, ArrowRight,
  Star, Users, Building2, TrendingUp, Calendar, Check
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CourseCard } from "@/components/site/CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import heroCyber from "@/assets/hero-cyber.jpg";
import heroClass from "@/assets/hero-classroom.jpg";
import heroCode from "@/assets/course-python.jpg";
import heroData from "@/assets/course-data.jpg";
import cyberPolice from "@/assets/cyber-police.jpg";
import logoMeity from "@/assets/partner-meity.png";
import logoCyber from "@/assets/partner-cybercell.png";
import logoEC from "@/assets/partner-ec.png";
import logoNSDC from "@/assets/partner-nsdc.png";
import logoSkill from "@/assets/partner-skillindia.png";

// You can import files or use URLs directly in the section below

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DECODETECH — Govt. Recognized IT & Cyber Security Training" },
      { name: "description", content: "Empowering careers in IT & Cyber Security with hands-on labs, expert trainers and 95% placement support." },
      { property: "og:title", content: "DECODETECH — Empowering Careers in Cyber Security" },
      { property: "og:description", content: "Govt. recognized training, live labs & guaranteed placement support." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: GraduationCap, title: "Industry Expert Trainers", desc: "Learn from professionals with 10+ years of real-world experience." },
  { icon: FlaskConical, title: "Live Practical Labs", desc: "24/7 access to cloud labs, SOC simulators and CTF environments." },
  { icon: Award, title: "Govt Recognized", desc: "MEITY & NSDC certified programs with industry-valid credentials." },
  { icon: Briefcase, title: "Placement Support", desc: "Dedicated placement cell with 500+ recruiter partnerships." },
];

const partners = ["MEITY", "EC-Council", "NSDC", "Skill India", "ISO Certified", "CompTIA"];
const recruiters = [
  { name: "TCS", logo: "https://cdn.simpleicons.org/tcs/1A4DA1" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "HCL", logo: "https://cdn.simpleicons.org/hcl/006BB6" },
  { name: "Tech Mahindra", logo: "https://cdn.simpleicons.org/mahindra/E31837" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: Building2, value: "500+", label: "Recruiter Partners" },
  { icon: TrendingUp, value: "95%", label: "Placement Rate" },
  { icon: Star, value: "4 LPA", label: "Highest Package" },
  { icon: Calendar, value: "8+ Yrs", label: "Of Excellence" },
];

const testimonials = [
  { name: "Aarav Sharma", role: "Security Analyst @ TCS", text: "The SOC labs and mentorship made me job-ready in 6 months. Got placed before completing the course!" },
  { name: "Priya Mehta", role: "Pentester @ Wipro", text: "Best ethical hacking program in India. The instructors actually work in the field — that makes a huge difference." },
  { name: "Rohan Verma", role: "Data Scientist @ Infosys", text: "From zero Python knowledge to a 6 LPA job. The capstone projects on my GitHub sealed the deal." },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
}

function Counter({ value }: { value: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`transition-all duration-700 ${shown ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
      <span className="text-3xl md:text-5xl font-extrabold gradient-text">{value}</span>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-[0.06]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full bg-primary/15 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
              Admissions open for 2026 Batch
            </span>
            <h1 className="hero-heading-container">
              <span className="hero-title-l1">Empowering Careers in</span>
              <span className="hero-title-l2 gradient-text">IT & Cyber Security</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
              Govt. Recognized Training &nbsp;|&nbsp; Live Practical Labs &nbsp;|&nbsp; Internship & Placement Support
            </p>

            {/* FEATURE ICONS */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: GraduationCap, label: "Industry Expert Trainers" },
                { icon: FlaskConical, label: "Live Practical Labs" },
                { icon: Award, label: "Govt. Recognized" },
                { icon: Briefcase, label: "Placement Support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl glass text-center transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-default"
                >
                  <div className="w-11 h-11 rounded-full hero-bg flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-foreground/80 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="hero-bg shadow-glow text-base hover:scale-105 transition-transform">
                <Link to="/contact">Apply Now <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base hover:scale-105 hover:shadow-glow transition-all">
                <Link to="/contact">Book Free Demo</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-bold text-foreground text-xl">10K+</span> Alumni</div>
              <div className="w-px h-8 bg-border" />
              <div><span className="font-bold text-foreground text-xl">95%</span> Placed</div>
              <div className="w-px h-8 bg-border" />
              <div><span className="font-bold text-foreground text-xl">4.9★</span> Rating</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5 animate-scale-in">
            {[
              { src: heroCyber, alt: "Cyber security training" },
              { src: heroClass, alt: "Classroom learning" },
              { src: heroCode, alt: "Coding labs" },
              { src: heroData, alt: "Data science" },
            ].map(({ src, alt }) => (
              <div key={alt} className="collage-img-wrap">
                <img src={src} alt={alt} className="collage-img" />
                <div className="collage-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ASSOCIATES & PARTNERS */}
      <section className="py-20 bg-partners">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-elegant border border-primary/5">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                Our Associates & Partners
              </h2>
              <div className="w-16 h-1 bg-primary-glow/30 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 items-center">
              {[
                { img: "https://tse2.mm.bing.net/th/id/OIP.fTqMRK29K29d9gqrF6p6awAAAA", name: "Meity", url: "https://www.meity.gov.in/" },
                { img: "https://thf.bing.com/th/id/OIP.8Bto5cxGLPYTvDjG2aEJ2gAAAA", name: "Cyber Cell", url: "https://www.maharashtra.gov.in/" },
                { img: "https://foundation.eccouncil.org/wp-content/uploads/2019/03/ECC-Foundation-Logo-Web-2.png", name: "EC-Council", url: "https://www.eccouncil.org/" },
                { img: "https://liveskills.in/images/nsdc-logo.png", name: "NSDC", url: "https://nsdcindia.org/" },
                { img: "data:image/webp;base64,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", name: "Skill India", url: "https://www.skillindia.gov.in/" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo-card"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="partner-logo-img"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Our Programs</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
                Industry-Aligned <span className="gradient-text">Courses</span>
              </h2>
              <p className="text-muted-foreground">
                Designed with input from hiring partners. Every course includes live projects,
                certifications and placement assistance.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/courses">Browse All Courses <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SPECIAL INITIATIVE */}
      <section className="relative py-16 md:py-20 overflow-hidden hero-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={cyberPolice} alt="Background pattern" className="w-full h-full object-cover mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  OUR SPECIAL INITIATIVE
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
                  CYBER EXPERT DEPLOYMENT & <br className="hidden md:block" />
                  POLICE TRAINING INITIATIVE
                </h2>
                <p className="text-base md:text-lg opacity-90 mb-8 leading-relaxed max-w-xl">
                  Specialized training for Police Departments & Cyber Cells with real-time practical exposure,
                  internship opportunities & hands-on training in live cases.
                </p>

                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                  {[
                    "Cyber Expert Deployment Project",
                    "Workshops & Awareness Programs",
                    "Internship in Cyber Cell",
                    "Training That Works In Real Investigation"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium opacity-95">
                      <div className="w-5 h-5 rounded-full bg-primary-glow flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" variant="secondary" className="rounded-full px-10 hover:scale-105 transition-transform shadow-glow font-bold">
                  <Link to="/about">KNOW MORE</Link>
                </Button>
              </div>

              <div className="hidden lg:block relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-float">
                  <img src={cyberPolice} alt="Cyber police training" className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary-glow/30 rounded-2xl -z-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2">
                <s.icon className="w-7 h-7 mx-auto text-primary-glow" />
                <Counter value={s.value} />
                <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEMENT */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Where our students work</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
                Trusted by India's Top <span className="gradient-text">Recruiters</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {recruiters.map((r, i) => (
              <Reveal key={r.name} delay={i * 50}>
                <div className="recruiter-card group flex-col gap-1">
                  <img
                    src={r.logo}
                    alt={r.name}
                    className="recruiter-logo-img"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling as HTMLSpanElement;
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  <span className="hidden font-bold text-sm text-primary text-center">{r.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="hero-bg shadow-glow rounded-full px-8">
              <Link to="/contact">Get Placement Assistance</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Stories from our <span className="gradient-text">Alumni</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="glass p-6 rounded-2xl card-hover h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary-glow text-primary-glow" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="mt-5 pt-5 border-t border-border/60">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="hero-bg rounded-3xl p-10 md:p-16 text-center text-primary-foreground shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ready to launch your tech career?</h2>
              <p className="opacity-90 max-w-xl mx-auto mb-8">Join 10,000+ alumni who transformed their careers with DECODETECH.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="shadow-glow">
                  <Link to="/contact">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
