import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CourseCard } from "@/components/site/CourseCard";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { InitiativeShowcase } from "@/components/site/InitiativeShowcase";
import { PartnersSection } from "@/components/site/PartnersSection";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — DECODETECH" },
      { name: "description", content: "Browse all IT & Cyber Security courses at DECODETECH." },
      { property: "og:title", content: "All Courses — DECODETECH" },
      { property: "og:description", content: "Cyber Security, Ethical Hacking, Data Science, Python and more." },
    ],
  }),
  component: CoursesPage,
});

const filters = ["All", "Beginner", "Intermediate", "Advanced"] as const;
type Filter = typeof filters[number];

function CoursesPage() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? courses : courses.filter((c) => c.level === active);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-[0.05]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="container mx-auto px-4 relative text-center max-w-3xl">
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Programs</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4">
            Build Your <span className="gradient-text">Tech Career</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose from our carefully designed programs — each one combines theory,
            live labs, capstone projects and placement support.
          </p>
        </div>
      </section>

      <PartnersSection />

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <Button
                key={f}
                variant={active === f ? "default" : "outline"}
                size="sm"
                onClick={() => setActive(f)}
                className={active === f ? "hero-bg shadow-glow" : ""}
              >
                {f}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No courses match this filter.</p>
          )}
        </div>
      </section>

      <InitiativeShowcase />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
