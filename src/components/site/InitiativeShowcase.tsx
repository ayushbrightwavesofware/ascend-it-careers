import { useState } from "react";
import {
  Check, GraduationCap, Users, HandHeart, Trophy, Award, Briefcase,
  Phone, Mail, MessageCircle, ChevronLeft, ChevronRight, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import policeImg from "@/assets/police-back.jpg";
import studentImg from "@/assets/student-rohit.jpg";

const stats = [
  { icon: GraduationCap, value: "10,000+", label: "Students Trained" },
  { icon: Users, value: "500+", label: "Recruitment Partners" },
  { icon: HandHeart, value: "95%+", label: "Placement Assistance" },
  { icon: Trophy, value: "4 LPA", label: "Highest Package" },
  { icon: Award, value: "8+", label: "Years of Excellence" },
  { icon: Briefcase, value: "100+", label: "Corporate Trainings" },
];

const recruiters = ["TATA", "Wipro", "HCL", "Infosys", "Tech Mahindra", "accenture"];

const stories = [
  {
    name: "Rohit Patil",
    role: "Cyber Security Analyst | Placed at Wipro",
    text: "DECODETECH not only improved my technical skills but also gave me the confidence to build my career in Cyber Security. The placement support is excellent!",
    img: studentImg,
  },
  {
    name: "Anjali Sharma",
    role: "Pentester | Placed at TCS",
    text: "Hands-on labs and dedicated mentors made all the difference. I cracked my dream job within 3 months of completing the course.",
    img: studentImg,
  },
  {
    name: "Karan Mehta",
    role: "Data Scientist | Placed at Infosys",
    text: "The capstone projects on my GitHub got me noticed. Couldn't have asked for a better launchpad to my tech career.",
    img: studentImg,
  },
];

export function InitiativeShowcase() {
  const [idx, setIdx] = useState(0);
  const story = stories[idx];

  return (
    <>
      {/* Special Initiative — Police Banner */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={policeImg}
              alt="Cyber Police Training Initiative"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/20" />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 text-primary-foreground min-h-[420px]">
              <div>
                <p className="text-sm font-semibold tracking-widest text-primary-foreground/80 mb-3">
                  OUR SPECIAL INITIATIVE
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                  CYBER EXPERT DEPLOYMENT &<br />POLICE TRAINING INITIATIVE
                </h2>
                <p className="text-primary-foreground/85 leading-relaxed mb-6 max-w-xl">
                  Specialized training for Police Departments & Cyber Cells with real-time
                  practical exposure, internship opportunities & hands-on training in live cases.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8 max-w-xl">
                  {[
                    "Cyber Expert Deployment Project",
                    "Workshops & Awareness Programs",
                    "Internship in Cyber Cell",
                    "Training That Works In Real Investigation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="w-5 h-5 rounded-md bg-primary-foreground/15 backdrop-blur flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" size="lg" className="shadow-glow">Know More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 mt-12 border-y border-border/60 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-extrabold gradient-text leading-none">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement + Success Stories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          {/* Placement Highlights */}
          <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
            <h3 className="text-xs font-bold tracking-widest text-primary mb-6">PLACEMENT HIGHLIGHTS</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6">
              {recruiters.map((r) => (
                <div
                  key={r}
                  className="aspect-[3/2] flex items-center justify-center rounded-xl bg-card border border-border/60 font-bold text-muted-foreground hover:text-primary hover:shadow-soft transition-all"
                >
                  {r}
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button className="hero-bg shadow-glow">View Placement Stories</Button>
            </div>
          </div>

          {/* Student Story Slider */}
          <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
            <h3 className="text-xs font-bold tracking-widest text-primary mb-6">STUDENT SUCCESS STORIES</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIdx((i) => (i - 1 + stories.length) % stories.length)}
                className="shrink-0 w-9 h-9 rounded-full bg-card border border-border/60 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex-1 grid sm:grid-cols-[auto_1fr] gap-5 items-center animate-fade-in" key={idx}>
                <img
                  src={story.img}
                  alt={story.name}
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-accent mx-auto sm:mx-0"
                />
                <div>
                  <Quote className="w-5 h-5 text-primary-glow mb-2" />
                  <p className="text-sm text-foreground/80 leading-relaxed mb-3">{story.text}</p>
                  <p className="text-sm font-bold text-primary">– {story.name}</p>
                  <p className="text-xs text-muted-foreground">{story.role}</p>
                </div>
              </div>

              <button
                onClick={() => setIdx((i) => (i + 1) % stories.length)}
                className="shrink-0 w-9 h-9 rounded-full bg-card border border-border/60 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-center gap-1.5 mt-5">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to story ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-primary" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-bg rounded-2xl p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-primary-foreground shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary-foreground/15 backdrop-blur flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">HAVE QUESTIONS?</p>
                <p className="text-xs opacity-80">We're here to help!</p>
              </div>
            </div>
            <a href="tel:+918655966336" className="flex items-center gap-3 hover:opacity-90">
              <div className="w-11 h-11 rounded-full bg-primary-foreground/15 backdrop-blur flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs opacity-80 font-semibold">CALL US</p>
                <p className="font-bold text-sm">+91 8655966336</p>
              </div>
            </a>
            <a href="mailto:hello@decodetech.com" className="flex items-center gap-3 hover:opacity-90">
              <div className="w-11 h-11 rounded-full bg-primary-foreground/15 backdrop-blur flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs opacity-80 font-semibold">EMAIL US</p>
                <p className="font-bold text-sm">hello@decodetech.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/918655966336"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] rounded-xl px-4 py-3 font-bold text-sm hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" fill="currentColor" />
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
