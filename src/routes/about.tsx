import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Users, Sparkles, Trophy } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import classImg from "@/assets/hero-classroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CyberEdge IT Institute" },
      { name: "description", content: "Govt. recognized IT training institute with 8+ years of excellence, expert trainers and 10,000+ successful alumni." },
      { property: "og:title", content: "About CyberEdge IT" },
      { property: "og:description", content: "Our mission, vision and team behind India's leading IT & Cyber Security training institute." },
    ],
  }),
  component: AboutPage,
});

const trainers = [
  { name: "Vikram Singh", role: "Lead — Cyber Security", exp: "12+ yrs at Deloitte, KPMG", initials: "VS" },
  { name: "Anita Rao", role: "Lead — Data Science", exp: "Ex-Amazon ML Scientist", initials: "AR" },
  { name: "Karan Joshi", role: "Lead — Ethical Hacking", exp: "Bug bounty hunter, OSCP", initials: "KJ" },
  { name: "Neha Kapoor", role: "Lead — Programming", exp: "Senior Engineer @ Google", initials: "NK" },
];

const achievements = [
  { icon: Trophy, label: "Best IT Training Institute 2024", sub: "EdTech Awards" },
  { icon: Award, label: "MEITY Empanelled Partner", sub: "Govt. of India" },
  { icon: Users, label: "10,000+ Alumni Placed", sub: "Across 500+ companies" },
  { icon: Sparkles, label: "ISO 9001:2015 Certified", sub: "Quality assurance" },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-[0.05]" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-5 leading-tight">
              8+ Years of <span className="gradient-text">Tech Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CyberEdge IT Institute was founded with a simple mission — to bridge the gap
              between academic learning and industry expectations. Today, we're one of India's
              most trusted destinations for IT and Cyber Security training.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild className="hero-bg shadow-glow"><Link to="/courses">Our Programs</Link></Button>
              <Button asChild variant="outline"><Link to="/contact">Visit Campus</Link></Button>
            </div>
          </div>
          <div className="relative">
            <img src={classImg} alt="Our classroom" className="rounded-3xl shadow-elegant w-full" />
            <div className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl shadow-elegant">
              <p className="text-3xl font-extrabold gradient-text">10K+</p>
              <p className="text-sm text-muted-foreground">Successful Alumni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="glass p-8 rounded-2xl card-hover">
            <div className="w-12 h-12 rounded-xl hero-bg flex items-center justify-center mb-4 shadow-glow">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower every learner — regardless of background — with industry-grade
              skills, real-world experience and the confidence to thrive in the global
              tech ecosystem.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl card-hover">
            <div className="w-12 h-12 rounded-xl hero-bg flex items-center justify-center mb-4 shadow-glow">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be India's most trusted IT skilling partner — producing world-class
              cyber defenders, data scientists and engineers who shape the digital future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose <span className="gradient-text">CyberEdge?</span></h2>
            <p className="text-muted-foreground">Built different — every detail designed for your career success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Live Industry Projects", d: "Work on real client briefs from day one." },
              { t: "1:1 Career Mentorship", d: "Dedicated mentor through your journey." },
              { t: "Lifetime Lab Access", d: "Practice anytime, even after course ends." },
              { t: "EMI & Pay-After-Placement", d: "Flexible options so cost is no barrier." },
            ].map((x) => (
              <div key={x.t} className="bg-card p-6 rounded-2xl shadow-soft card-hover border border-border/50">
                <h3 className="font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Our Faculty</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Meet Your <span className="gradient-text">Mentors</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6 text-center card-hover">
                <div className="w-20 h-20 rounded-full hero-bg mx-auto flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4 shadow-glow">
                  {t.initials}
                </div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-sm text-primary-glow font-medium">{t.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">Our <span className="gradient-text">Achievements</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a) => (
              <div key={a.label} className="bg-card p-6 rounded-2xl shadow-soft text-center card-hover border border-border/50">
                <a.icon className="w-10 h-10 mx-auto text-primary-glow mb-3" />
                <p className="font-bold text-sm">{a.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
