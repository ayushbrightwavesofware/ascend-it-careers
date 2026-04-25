import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, FlaskConical, Award, Briefcase, ArrowRight,
  Star, Users, Building2, TrendingUp, Calendar,
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberEdge IT — Govt. Recognized IT & Cyber Security Training" },
      { name: "description", content: "Empowering careers in IT & Cyber Security with hands-on labs, expert trainers and 95% placement support." },
      { property: "og:title", content: "CyberEdge IT — Empowering Careers in Cyber Security" },
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
const recruiters = ["TCS", "Wipro", "Infosys", "Accenture", "HCL", "Tech Mahindra", "Cognizant", "IBM"];

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Empowering Careers in{" "}
              <span className="gradient-text">IT & Cyber Security</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Govt. recognized training programs with hands-on labs, expert mentorship
              and 95% placement support — built for the next generation of tech leaders.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="hero-bg shadow-glow text-base">
                <Link to="/contact">Apply Now <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
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

          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <div className="space-y-4">
              <img src={heroCyber} alt="Cyber security training" className="rounded-2xl shadow-elegant aspect-square object-cover w-full" />
              <img src={heroCode} alt="Coding labs" className="rounded-2xl shadow-soft aspect-[4/5] object-cover w-full" />
            </div>
            <div className="space-y-4 mt-10">
              <img src={heroClass} alt="Classroom" className="rounded-2xl shadow-soft aspect-[4/5] object-cover w-full" />
              <img src={heroData} alt="Data science" className="rounded-2xl shadow-elegant aspect-square object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="glass p-6 rounded-2xl card-hover h-full">
                  <div className="w-12 h-12 rounded-xl hero-bg flex items-center justify-center mb-4 shadow-glow">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-14 border-y border-border/60">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Recognized & Accredited By
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="text-2xl font-bold text-muted-foreground/60 hover:text-primary transition-colors">
                  {p}
                </div>
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
      <section className="relative py-24 overflow-hidden">
        <img src={cyberPolice} alt="Cyber police initiative" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl text-primary-foreground">
            <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold inline-block mb-4 text-foreground">
              Special Initiative
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Cyber Police Training Program
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              In partnership with state law enforcement agencies — equipping officers
              with cutting-edge digital forensics and cyber crime investigation skills.
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-glow">
              <Link to="/about">Know More <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Where Our Students Work</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
                Trusted by India's Top <span className="gradient-text">Recruiters</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recruiters.map((r, i) => (
              <Reveal key={r} delay={i * 50}>
                <div className="glass rounded-xl p-6 text-center font-bold text-lg text-muted-foreground hover:text-primary card-hover">
                  {r}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="hero-bg shadow-glow">
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
              <p className="opacity-90 max-w-xl mx-auto mb-8">Join 10,000+ alumni who transformed their careers with CyberEdge.</p>
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
