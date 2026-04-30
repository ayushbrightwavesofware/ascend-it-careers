import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DECODETECH Institute" },
      { name: "description", content: "Get in touch with DECODETECH — book a free demo, ask about courses or visit our campus." },
      { property: "og:title", content: "Contact DECODETECH" },
      { property: "og:description", content: "Reach out for course details, demos and placement information." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().regex(/^[+\d\s-]{8,15}$/, "Invalid phone number"),
  course: z.string().min(1, "Please select a course"),
  message: z.string().trim().max(1000).optional(),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const issue of res.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    toast.success("Thanks! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", course: "", message: "" });
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-[0.05]" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions about courses, demos or placements? Our team responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 glass p-6 md:p-10 rounded-3xl shadow-elegant">
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <CheckCircle2 className="w-16 h-16 mx-auto text-primary-glow mb-4" />
                <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
                <p className="text-muted-foreground mb-6">Our team will reach out within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Send another</Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold mb-2">Apply / Book a Free Demo</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Doe" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label htmlFor="course">Course Interest *</Label>
                    <Select value={form.course} onValueChange={(v) => update("course", v)}>
                      <SelectTrigger id="course"><SelectValue placeholder="Select a course" /></SelectTrigger>
                      <SelectContent>
                        {courses.map((c) => <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>)}
                        <SelectItem value="Other">Other / Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea id="message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your goals..." />
                </div>
                <Button type="submit" size="lg" disabled={loading} className="w-full hero-bg shadow-glow">
                  {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: "Visit us", lines: ["1/105, Navrang Arcade, Gokhale Road, Thane West"] },
              { icon: Phone, title: "Call us", lines: ["+91 8655966336", "Mon–Sat 9 AM – 8 PM"] },
              { icon: Mail, title: "Email", lines: ["info@dcodetech.in", "admissions@decodetech.com"] },
            ].map((c) => (
              <div key={c.title} className="glass p-5 rounded-2xl card-hover flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl hero-bg flex items-center justify-center shadow-glow">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">{c.title}</h3>
                  {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden shadow-soft border border-border/50 h-64">
              <iframe
                title="Campus location"
                src="https://maps.google.com/maps?q=Cyber%20Hub%20Gurugram&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
